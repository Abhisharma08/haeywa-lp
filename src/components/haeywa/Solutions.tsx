import { ArrowRightLeft, Banknote, CreditCard, Wallet } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: <ArrowRightLeft className="h-10 w-10 text-primary" />,
    title: "Business Payments",
    description: "Automate vendor payments, manage invoices, and streamline your cash flow.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-primary" />,
    title: "Expense Management",
    description: "Track, approve, and reimburse employee expenses in real-time.",
  },
  {
    icon: <Banknote className="h-10 w-10 text-primary" />,
    title: "UPI for Business",
    description: "Accept and make instant payments using India's leading digital payment system.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Corporate Cards",
    description: "Issue smart corporate cards with custom spending limits and controls.",
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
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{solution.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
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
