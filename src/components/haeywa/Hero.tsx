import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import LeadForm from "./LeadForm";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === "dashboard-mockup");

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 pt-24 md:pt-32 lg:pt-40 pb-20 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-secondary sm:text-5xl md:text-6xl">
                Simplify Business Payments & Expense Management with haeywa
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                Empower your team with a unified platform for effortless bill payments, automated petty cash management, and smart expense insights. Track every rupee, control budgets, and manage approvals — all in one secure place.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
