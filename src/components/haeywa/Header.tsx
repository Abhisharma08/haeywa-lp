"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const NavLinks = ({ className }: { className?: string }) => (
  <nav className={cn("flex items-center gap-6", className)}>
    <Link
      href="#solutions"
      className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      Solutions
    </Link>
    <Link
      href="#why-us"
      className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      Why haeywa
    </Link>
    <Link
      href="#faq"
      className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      FAQ
    </Link>
  </nav>
);

export default function Header() {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile) {
    return (
      <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", isScrolled ? "shadow-sm" : "")}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/">
            <Logo />
            <span className="sr-only">haeywa Home</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                 <div className="flex justify-between items-center mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-6">
                  <Link href="#solutions" className="text-lg font-medium">Solutions</Link>
                  <Link href="#why-us" className="text-lg font-medium">Why haeywa</Link>
                  <Link href="#faq" className="text-lg font-medium">FAQ</Link>
                </nav>
                <div className="mt-8 flex flex-col gap-4">
                   <Button asChild variant="outline" className="w-full text-secondary border-secondary hover:bg-secondary/10">
                    <Link href="#lead-form">Request a Demo</Link>
                   </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    );
  }

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", isScrolled ? "shadow-sm" : "")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <Logo />
          <span className="sr-only">haeywa Home</span>
        </Link>
        <div className="flex items-center gap-8">
          <NavLinks className="hidden lg:flex" />
          <div className="hidden items-center gap-4 md:flex">
            <Button asChild variant="outline" className="text-secondary border-secondary hover:bg-secondary/10 hover:text-secondary">
              <Link href="#lead-form">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
