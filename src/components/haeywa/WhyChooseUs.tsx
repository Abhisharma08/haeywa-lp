import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Complete Financial Control",
    description: "Manage all payments — from vendor invoices to petty cash — through one intuitive dashboard."
  },
  {
    title: "Eliminate Manual Errors",
    description: "No more spreadsheets or missing receipts. Every petty cash expense is automatically recorded and categorised."
  },
  {
    title: "Real-Time Visibility",
    description: "Monitor spending patterns and cash availability across teams, departments, or branches in real time."
  },
  {
    title: "Custom Rules & Approvals",
    description: "Define who can spend, how much, and when — making petty cash management simple and transparent."
  },
  {
    title: "Fast Setup & Reliable Support",
    description: "Get started in minutes with guided onboarding and ongoing support from our experts."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
                Why Choose haeywa?
              </h2>
              <p className="max-w-prose text-muted-foreground md:text-xl">
                We're not just a platform; we're your partner in financial growth. Discover the features that set us apart.
              </p>
            </div>
            <ul className="space-y-6">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <video
              src="https://res.cloudinary.com/dgqo4goxg/video/upload/v1756805493/haeywa_pwzzvq.mp4"
              width={1000}
              height={800}
              className="mx-auto rounded-2xl object-cover shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}
