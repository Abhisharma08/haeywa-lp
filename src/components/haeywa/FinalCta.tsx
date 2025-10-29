import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section id="final-cta" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="my-20 lg:my-24 flex items-center justify-center rounded-2xl bg-gradient-to-r from-secondary to-accent p-8 md:p-16">
          <div className="max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to take control of your business payments and petty cash?
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              Start today with haeywa — simplify, track, and manage expenses the smart way.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base w-full sm:w-auto">
                <Link href="#lead-form">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-accent hover:bg-accent/90 text-accent-foreground border-accent hover:border-accent/90 w-full sm:w-auto text-base">
                <Link href="#lead-form">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
