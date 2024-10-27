'use client'

import { Button } from "@/components/ui/button"
import { calistoga } from "@/fonts/calistoga"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="text-center flex flex-col gap-5 items-center">
      <h2 className={`${calistoga.className} text-4xl`}>Something went wrong!</h2>
      <Button className="w-fit" variant={"secondary"} onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  )
}