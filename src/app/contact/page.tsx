import { Input } from "@/components/ui/input";
import { calistoga } from "@/fonts/calistoga";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import ContactForm from "@/components/form";

const page = () => {
  return (
    <article className="dark:text-gray-200 mt-8 pb-16 flex flex-col gap-8">
      <section className="w-full flex flex-wrap-reverse items-center justify-between gap-8"></section>
      <h1
              className={`${calistoga.className} text-5xl dark:text-white`}
            >
              contact me.
      </h1>
      <ContactForm />
    </article>
  );
};

export default page;
