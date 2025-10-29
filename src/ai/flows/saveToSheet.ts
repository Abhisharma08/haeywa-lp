'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { google } from 'googleapis';

const SaveToSheetInputSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  jobTitle: z.string().optional(),
  companyName: z.string().optional(),
});
export type SaveToSheetInput = z.infer<typeof SaveToSheetInputSchema>;

export async function saveToSheet(input: SaveToSheetInput): Promise<{ success: boolean }> {
  return await saveToSheetFlow(input);
}

const saveToSheetFlow = ai.defineFlow(
  {
    name: 'saveToSheetFlow',
    inputSchema: SaveToSheetInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (data) => {
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
    const RANGE = 'Sheet1'; 

    if (!SPREADSHEET_ID) {
        console.error('GOOGLE_SHEET_ID environment variable not set.');
        return { success: false };
    }
    
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // If it's the second step, we update the existing row
        if (data.jobTitle && data.companyName) {
            // Find the row with the matching email
            const getRowsResponse = await sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: `${RANGE}!B:B`, // Assuming email is in column B
            });

            const rows = getRowsResponse.data.values;
            if (!rows) {
                console.error('No data found in sheet.');
                return { success: false };
            }

            const rowIndex = rows.findIndex(row => row[0] === data.email);
            
            if (rowIndex === -1) {
                 console.error('Could not find matching email to update.');
                 // As a fallback, append a new row
                 const appendResponse = await sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: RANGE,
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [[data.fullName, data.email, data.phone, new Date().toISOString(), data.jobTitle, data.companyName]],
                    },
                });
                return { success: appendResponse.status === 200 };
            }

            const rowNumber = rowIndex + 1;
            const updateRange = `${RANGE}!E${rowNumber}:F${rowNumber}`; // Update columns E and F

            const updateResponse = await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: updateRange,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[data.jobTitle, data.companyName]]
                }
            });
            return { success: updateResponse.status === 200 };

        } else {
            // First step, just append the initial data
            const appendResponse = await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: RANGE,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[data.fullName, data.email, data.phone, new Date().toISOString()]],
                },
            });
            return { success: appendResponse.status === 200 };
        }

    } catch (e: any) {
        console.error('Error saving to sheet:', e.message);
        return { success: false };
    }
  }
);
