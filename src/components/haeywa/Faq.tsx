import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is haeywa?",
    answer: "haeywa is a comprehensive business payments and expense management platform designed to simplify your financial operations. It offers tools for bill payments, automated expense tracking, corporate cards, and insightful analytics, all in one place."
  },
  {
    question: "How does haeywa secure our financial data?",
    answer: "Security is our top priority. We use bank-grade encryption, multi-factor authentication, and comply with industry-leading security standards to ensure your financial data is always protected."
  },
  {
    question: "Can haeywa integrate with our existing accounting software?",
    answer: "Yes, haeywa is designed for seamless integration. It connects with popular accounting software like QuickBooks, Xero, and Tally to ensure your financial records are always in sync."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer dedicated support to all our clients. Our team is available via email, phone, and live chat to assist you with any questions or issues you may have. We also provide a comprehensive knowledge base and tutorials."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, haeywa offers a powerful and intuitive mobile app for both iOS and Android. You can manage payments, track expenses, and view reports on the go, empowering your team with financial flexibility."
  }
]

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
