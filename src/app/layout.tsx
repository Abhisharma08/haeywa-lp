import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'haeywa | Effortless Business Payments & Expense Management',
  description: 'Simplify your finances with haeywa. A unified platform for bill payments, expense tracking, corporate cards, and smart business insights. Request a free demo today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable)}>
      <head>
        {/* Google Tag Manager - Paste your GTM snippet here */}
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
