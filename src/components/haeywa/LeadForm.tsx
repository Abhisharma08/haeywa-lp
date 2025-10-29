"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowRight, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { saveToSheet } from "@/ai/flows/saveToSheet"

const step1Schema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
})

const step2Schema = z.object({
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
})

type Step1Values = z.infer<typeof step1Schema>;
type Step2Values = z.infer<typeof step2Schema>;

export default function LeadForm({ className }: { className?: string }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Values | null>(null);


  const formStep1 = useForm<Step1Values>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  })

  const formStep2 = useForm<Step2Values>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      jobTitle: "",
      companyName: "",
    },
  })
  
  async function onStep1Submit(values: Step1Values) {
    setIsSubmitting(true)
    try {
      const result = await saveToSheet(values);
      if (result.success) {
        setStep1Data(values);
        setStep(2);
      } else {
        throw new Error("Failed to save to sheet");
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not submit your details. Please try again.",
      });
    } finally {
      setIsSubmitting(false)
    }
  }

  async function onStep2Submit(values: Step2Values) {
    setIsSubmitting(true)
    try {
      if (!step1Data) {
        throw new Error("Initial data not found.");
      }
      const finalData = { ...step1Data, ...values };
      const result = await saveToSheet(finalData);

      if (result.success) {
        formStep1.reset();
        formStep2.reset();
        router.push("/thank-you");
      } else {
        throw new Error("Failed to save final details to sheet");
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not submit your details. Please try again.",
      });
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card id="lead-form" className={cn("w-full max-w-xl shadow-2xl mx-auto", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-secondary">Get a Free Demo</CardTitle>
        <CardDescription>
          {step === 1 ? "Fill out the form below to get started." : "Just one more step to go!"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <Form {...formStep1}>
            <form onSubmit={formStep1.handleSubmit(onStep1Submit)} className="space-y-6">
              <FormField
                control={formStep1.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formStep1.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="example@domain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formStep1.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="p-0 pt-4">
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Next <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        )}
        {step === 2 && (
          <Form {...formStep2}>
            <form onSubmit={formStep2.handleSubmit(onStep2Submit)} className="space-y-6">
               <FormField
                control={formStep2.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Marketing Manager" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={formStep2.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Acme Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="p-0 pt-4">
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}
