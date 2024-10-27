import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
      <section className="flex gap-6 dark:text-gray-400">
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
      </section>
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <span>© 2024</span>{" "}
          <Link className="link" href="/">
            walidsiala.com
          </Link>
          {" "} | {" "}
          <Link className="link font-bold" href="/privacy">
            privacy?
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
