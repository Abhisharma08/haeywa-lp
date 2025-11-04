'use client';

import { useEffect } from 'react';

export default function ConversionTracker() {
  useEffect(() => {
    // ✅ Trigger Google Ads conversion when this page mounts
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-11082531930/u4tnCM_6zrkbENqIyKQp',
        value: 1.0,
        currency: 'INR',
      });
      console.log('✅ Google Ads conversion fired');
    } else {
      console.warn('⚠️ gtag not found');
    }
  }, []);

  return null; // this component doesn't render anything visible
}
