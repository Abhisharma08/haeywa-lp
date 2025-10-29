import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can haeywa help manage petty cash digitally?",
    answer: "Yes. haeywa replaces manual registers with an automated petty cash management system for tracking and approval."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-grade encryption and comply with financial security standards to protect your information."
  },
  {
    question: "Can multiple users manage petty cash across branches?",
    answer: "Yes. You can create multiple user roles, define limits, and manage branch-level expenses easily."
  },
  {
    question: "How fast is onboarding?",
    answer: "Setup is simple — most businesses start managing payments and petty cash within a day."
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Find answers to common questions about haeywa's platform and services.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
