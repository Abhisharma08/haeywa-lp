"use client";

import { HandCoins, Landmark, PiggyBank, SearchCheck, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "Smarter Petty Cash Management",
    description: "Digitise your petty cash — track small expenses in real-time, avoid manual logs, and prevent overspending with transparent records.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Streamline Business Payments",
    description: "Pay vendors, utilities, and bills directly from one dashboard — fast, transparent, and hassle-free.",
  },
  {
    icon: <SearchCheck className="h-8 w-8 text-primary" />,
    title: "Real-Time Expense Tracking",
    description: "Get instant visibility into every transaction with automated categorisation and easy-to-read analytics.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure & Compliant Transactions",
    description: "Bank-grade encryption ensures every business payment, reimbursement, and petty cash expense is fully secure.",
  },
  {
    icon: <HandCoins className="h-8 w-8 text-primary" />,
    title: "Smart Insights & Reporting",
    description: "Gain complete control over expenses with detailed analytics and expense summaries that help you plan ahead.",
  },
];

export default function KeyBenefits() {
  return (
    <section id="benefits" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
            Key Benefits of Using haeywa
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
