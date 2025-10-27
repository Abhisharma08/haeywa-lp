"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import Faq from '@/components/haeywa/Faq';
import FinalCta from '@/components/haeywa/FinalCta';
import Footer from '@/components/haeywa/Footer';
import Header from '@/components/haeywa/Header';
import Hero from '@/components/haeywa/Hero';
import KeyBenefits from '@/components/haeywa/KeyBenefits';
import Solutions from '@/components/haeywa/Solutions';
import WhyChooseUs from '@/components/haeywa/WhyChooseUs';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <KeyBenefits />
        <Solutions />
        <WhyChooseUs />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 p-4 backdrop-blur-sm sm:hidden">
          <Button asChild className="w-full" size="lg">
            <Link href="#lead-form">Request a Free Demo</Link>
          </Button>
        </div>
      )}
    </div>
  );
}