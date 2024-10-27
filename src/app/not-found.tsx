import Link from "next/link";
import { calistoga } from "./layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div style={{ height: "60vh" }} className="flex justify-center items-center">
      <div className="text-center">
        <h2 className={`${calistoga.className} text-5xl`}>404 Not Found</h2>
        <p className="mt-3 mb-8">Could not find requested resource</p>
        <Link href="/"><Button variant={"link"}>Return Home</Button></Link>
      </div>
    </div>
  );
}
