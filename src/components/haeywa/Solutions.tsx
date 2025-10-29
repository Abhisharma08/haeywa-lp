import { ArrowRightLeft, Banknote, CreditCard, Wallet } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: <ArrowRightLeft className="h-10 w-10 text-primary" />,
    title: "Business Payments",
    description: "Simplify vendor payouts, recurring bill payments, and reimbursements — all from one integrated platform.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-primary" />,
    title: "Expense & Petty Cash Management",
    description: "Digitally manage your company’s petty cash fund. Set spending limits, monitor cash flow, and approve team reimbursements — anytime, anywhere.",
  },
  {
    icon: <Banknote className="h-10 w-10 text-primary" />,
    title: "UPI for Business",
    description: "Make instant payments with haeywa’s secure UPI integration — perfect for managing petty cash disbursements and on-the-go expenses.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Corporate Cards",
    description: "Empower your team with controlled spending access. haeywa cards simplify petty cash use, ensure traceability, and eliminate reimbursement delays.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-4xl">
            A Complete Financial Toolkit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Everything you need to manage your business finances, all in one platform.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Card key={solution.title} className="flex flex-col text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full border-8 border-primary/10 bg-primary/20 p-5">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                 <CardDescription className="pt-2">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="#lead-form">Enquire Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
