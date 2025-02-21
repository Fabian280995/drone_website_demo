"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useContactStore } from "@/store/useContactStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import SectionWrapper from "./layout/SectionWrapper";

const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  subject: z.string().min(1, {
    message: "Betreff muss mindestens 1 Zeichen lang sein.",
  }),
  message: z
    .string()
    .min(5, {
      message: "Nachricht muss mindestens 5 Zeichen lang sein.",
    })
    .max(MAX_MESSAGE_LENGTH, {
      message: `Nachricht darf nicht länger als ${MAX_MESSAGE_LENGTH} Zeichen sein.`,
    }),
});

const ContactSection: React.FC = () => {
  const [messageLength, setMessageLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [messageSend, setMessageSend] = useState(false);
  const subject = useContactStore((state) => state.subject);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Nachricht gesendet!",
          description: "Ich werde mich bald bei Ihnen melden.",
        });
        form.reset();
        setMessageLength(0);
        setMessageSend(true);
      } else {
        toast({
          title: "Fehler",
          description: "Es gab ein Problem beim Versenden der E-Mail.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (subject) {
      form.setValue("subject", subject);
    }
  }, [subject, form]);

  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
        <h3 className="text-center">
          Ich freue mich auf <b>Ihre</b> Anfrage!
        </h3>
        <div className="w-full max-w-5xl mx-auto mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ihr Name"
                        {...field}
                        className={
                          form.formState.errors.name ? "border-red-500" : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ihre.email@beispiel.de"
                        {...field}
                        className={
                          form.formState.errors.email ? "border-red-500" : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Betreff</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Betreff Ihrer Nachricht"
                        {...field}
                        className={
                          form.formState.errors.subject ? "border-red-500" : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachricht</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Textarea
                          rows={6}
                          placeholder="Ihre Nachricht"
                          {...field}
                          className={
                            form.formState.errors.message
                              ? "border-red-500"
                              : ""
                          }
                          onChange={(e) => {
                            field.onChange(e);
                            setMessageLength(e.target.value.length);
                          }}
                          maxLength={MAX_MESSAGE_LENGTH}
                        />
                        <div className="absolute bottom-2 right-2 text-sm text-gray-500">
                          {messageLength}/{MAX_MESSAGE_LENGTH}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {messageSend ? (
                <p className="text-center text-green-500">
                  Ihre Nachricht wurde erfolgreich gesendet!
                </p>
              ) : (
                <Button
                  type="submit"
                  className={cn(
                    "text-white max-sm:w-full py-6 px-4",
                    loading ? "opacity-80" : "opacity-100"
                  )}
                  disabled={loading}
                >
                  {loading && <Loader2 className="animate-spin" />}
                  Nachricht senden
                </Button>
              )}
            </form>
          </Form>
        </div>
        <div className="mt-12 text-center space-y-2">
          <a
            href="tel:+4915116773509"
            className="flex items-center justify-center hover:underline"
          >
            <Phone className="mr-2" /> +49 1511 6773509
          </a>
          <a
            href="mailto:fabianlessmann@cineeagle.com"
            className="flex items-center justify-center hover:underline"
          >
            <Mail className="mr-2" /> fabianlessmann@cineeagle.com
          </a>
          <a
            href="https://www.google.com/maps?q=40724+Hilden"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:underline"
          >
            <MapPin className="mr-2" /> Hilden, Deutschland
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
