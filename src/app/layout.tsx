import type { Metadata } from "next";
import { Poppins , Calistoga} from "next/font/google"
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Walid Portfolio"
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
        <div>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
