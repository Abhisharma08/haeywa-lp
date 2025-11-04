'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/haeywa/Header';
import Footer from '@/components/haeywa/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | haeywa',
  description: 'Your demo request has been received. We will be in touch shortly.',
};

export default function ThankYouPage() {
  useEffect(() => {
    // ✅ Fire Google Ads conversion when the page loads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-11082531930/u4tnCM_6zrkbENqIyKQp',
        value: 1.0,
        currency: 'INR',
      });
    }
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto p-4">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-secondary mb-2">Thank You!</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Your demo request has been submitted successfully. We will be in touch with you shortly.
          </p>
          <Button asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
