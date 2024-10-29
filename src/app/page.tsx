import { calistoga } from "@/fonts/calistoga";
import Image from "next/image";
import { ArrowDownRight, FileUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work from "@/components/tabs";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <article className="dark:text-gray-200 mt-8 pb-16 flex flex-col gap-16">
        <section className="w-full flex flex-wrap-reverse items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <h1
              className={`${calistoga.className} text-5xl dark:text-white`}
            >
              hi walidd here &#128527;
            </h1>
            <p className="max-w-lg leading-5">
              21-year-old software engineer from Tunisia TN <br></br> <br></br>{" "}
              I like to develop full-stack, drink instant coffee and get coding
              advice from the world.
            </p>
            <div className="flex gap-2 items-center">
              <p className="font-medium dark:text-white">
                Ask anything about me
              </p>
              <div className="w-fit border-b-2 border-white">
                <ArrowDownRight className="inline" size={20} />
              </div>
            </div>
            <div className="flex gap-5 mt-2">
              <Link
                href={"/Walid_Resume.pdf"}
                download="Walid_Siala_Resume.pdf"
              >
                <Button variant={"outline"}>
                  Resume
                  <FileUp />
                </Button>
              </Link>
              <div className="flex gap-5 items-center text-gray-600 dark:text-gray-400">
                <Linkedin
                  className="dark:hover:text-white hover:text-black hover:cursor-pointer"
                  size={20}
                />
                <Github
                  className="dark:hover:text-white hover:text-black hover:cursor-pointer"
                  size={20}
                />
                <Mail
                  className="dark:hover:text-white hover:text-black hover:cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
          <div className="w-40 h-40 relative">
            <Image
              className="rounded-md absolute object-cover"
              alt="photo"
              src={"/image2.jpg"}
              fill
            />
          </div>
        </section>
        <Work />
        <Projects />
      </article>
    </>
  );
}
