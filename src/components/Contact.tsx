"use client";
import React, { useEffect, useState } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PaddingBox from "./layout/PaddingBox";
import { useContactStore } from "@/store/useContactStore";

const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  subject: z.string().min(5, {
    message: "Betreff muss mindestens 5 Zeichen lang sein.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Nachricht muss mindestens 10 Zeichen lang sein.",
    })
    .max(MAX_MESSAGE_LENGTH, {
      message: `Nachricht darf nicht länger als ${MAX_MESSAGE_LENGTH} Zeichen sein.`,
    }),
});

const ContactSection: React.FC = () => {
  const [messageLength, setMessageLength] = useState(0);
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Formular gesendet",
      description:
        "Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.",
    });
    form.reset();
    setMessageLength(0);
  }

  useEffect(() => {
    if (subject) {
      form.setValue("subject", subject);
    }
  }, [subject, form.setValue]);

  return (
    <section id="contact" className="h-[calc(100vh-80px)]">
      <PaddingBox
        vertical="xl"
        horizontal="lg"
        className="flex flex-col items-center justify-center h-full"
      >
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
              <Button type="submit" className="text-white">
                Nachricht senden
              </Button>
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
      </PaddingBox>
    </section>
  );
};

export default ContactSection;
