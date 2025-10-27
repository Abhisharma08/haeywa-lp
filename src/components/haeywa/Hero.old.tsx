import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === "dashboard-mockup");

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 pt-24 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-secondary sm:text-5xl md:text-6xl lg:text-7xl">
                Simplify Business Payments & Expense Management with Haeywa
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                Empower your team with a unified platform for effortless bill payments, automated expense tracking, and smart business insights.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg sm:w-auto">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary text-lg sm:w-auto">
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={800}
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center shadow-2xl lg:w-full"
                data-ai-hint={heroImage.imageHint}
              />
            )}
             <div className="absolute -bottom-1/4 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
