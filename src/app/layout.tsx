import type { Metadata } from "next";
import { Poppins, Calistoga } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://walid-siala.com"),
  title: "Walid Siala Portfolio",
  description:
    "Walid Siala, 22-year-old software engineer from Luxembourg LU. I like to develop full-stack, drink instant coffee and get coding advice from the world.",
  keywords: [
    "Walid Siala",
    "Walid Siala Portfolio",
    "Walid Siala Resume",
    "Walid Siala Projects",
    "walid",
    "siala",
    "tunis",
    "tunisia",
    "luxembourg",
    "developer",
    "full stack",
    "nextjs",
    "resume",
    "portfolio",
    "walid siala portfolio",
    "walid siala resume",
  ],
  creator: "Walid Siala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} mx-auto flex min-h-screen max-w-3xl flex-col px-8`}
      >
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
