import { BarChart3, Gauge, Lock, ReceiptText, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: <ReceiptText className="h-8 w-8 text-primary" />,
    title: "Streamline All Business Payments",
    description: "One platform to manage all your payables and receivables effortlessly.",
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: "Real-Time Expense Tracking",
    description: "Monitor your team's spending as it happens with automated tracking.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Secure & Compliant Transactions",
    description: "Bank-grade security and compliance to protect your financial data.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Smart Insights",
    description: "Gain actionable insights into your business spending with powerful analytics.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Empower Your Team",
    description: "Provide your team with the tools they need to manage expenses efficiently.",
  },
];

export default function KeyBenefits() {
  return (
    <section id="benefits" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
            The haeywa Advantage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Experience a smarter way to manage your business finances.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <Card key={index} className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
