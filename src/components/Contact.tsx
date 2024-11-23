"use client";
import React, { useState } from "react";
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

const MAX_MESSAGE_LENGTH = 500;

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
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

  return (
    <section id="contact" className="h-[calc(100vh-80px)]">
      <PaddingBox vertical="xl" horizontal="xl">
        <h2 className="text-center">Kontaktieren Sie mich</h2>
        <div className="max-w-md mx-auto">
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachricht</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Textarea
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
              <Button type="submit">Nachricht senden</Button>
            </form>
          </Form>
        </div>
        <div className="mt-12 text-center space-y-2">
          <p className="flex items-center justify-center">
            <Phone className="mr-2" /> +49 123 456789
          </p>
          <p className="flex items-center justify-center">
            <Mail className="mr-2" /> kontakt@fpv-drohnenfluege.de
          </p>
          <p className="flex items-center justify-center">
            <MapPin className="mr-2" /> Musterstadt, Deutschland
          </p>
        </div>
      </PaddingBox>
    </section>
  );
};

export default ContactSection;
