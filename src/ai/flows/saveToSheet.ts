'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { google } from 'googleapis';

const SaveToSheetInputSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
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
    // IMPORTANT: To make this work, you need to follow these steps:
    // 1. Create a Google Sheet.
    // 2. Go to the Google Cloud Console, enable the Google Sheets API for your project.
    // 3. Create a Service Account and download its JSON key file.
    // 4. Share your Google Sheet with the service account's email address (e.g., your-service-account@your-project-id.iam.gserviceaccount.com).
    // 5. Store the Service Account JSON and your Sheet ID in environment variables.

    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
    const RANGE = 'Sheet1'; // Change this if your sheet has a different name

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
        
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[data.fullName, data.email, data.phone, new Date().toISOString()]],
            },
        });

        return { success: response.status === 200 };
    } catch (e: any) {
        console.error('Error saving to sheet:', e.message);
        return { success: false };
    }
  }
);
