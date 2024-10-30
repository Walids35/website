"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});

const ContactForm = () => {
  const f: any = useRef();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("message", data.message);

    formData.append("service_id", process.env.NEXT_PUBLIC_SERVICE_ID || "");
    formData.append("template_id", process.env.NEXT_PUBLIC_TEMPLATE_ID || "");
    formData.append("user_id", process.env.NEXT_PUBLIC_USER_ID || "");

    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        if (response.ok) {
          alert("Your message has been sent successfully");
        } else {
          return response.json().then((errorData) => {
            throw new Error(JSON.stringify(errorData));
          });
        }
      })
      .catch(function (error) {
        alert("Oops... " + error.message);
      });
    form.reset();
  }

  return (
    <Form {...form}>
      <form ref={f} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormControl>
                    <Input className="" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="Leave feedback about the site, career advice, or anything else"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Send Message
            <Send />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
