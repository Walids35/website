import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { calistoga } from '@/fonts/calistoga'
 
export default function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
      h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
          className={`${calistoga.className} text-5xl my-10 font-bold`}
          {...props}
        />
      ),
      h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
        style={{ textAlign: "justify", lineHeight: "1.6", margin:"1em 0", fontSize:"24px", fontWeight:"bold" }}
          className={calistoga.className}
          {...props}
        />
      ),
      h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
          className={cn(
            "mt-8 scroll-m-20 font-sans text-xl font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
          className={cn(
            "mt-8 scroll-m-20 font-sans text-lg font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
          className={cn(
            "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
          className={cn(
            "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
            className
          )}
          {...props}
        />
      ),
      a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a
          className={cn("font-medium underline underline-offset-4", className)}
          {...props}
        />
      ),
      p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
          style={{ textAlign: "justify", lineHeight: "1.6", margin:"1em 0" }}
          {...props}
        />
      ),
      ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul style={{listStyle:""}} className={cn("my-6 ml-6 list-disc", className)} {...props} />
      ),
      ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
      ),
      li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className={cn("mt-2", className)} {...props} />
      ),
      blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <blockquote
          className={cn("mt-6 border-l-2 pl-6 italic", className)}
          {...props}
        />
      ),
      img: ({
        className,
        alt,
        ...props
      }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn("rounded-md my-10", className)} alt={alt} {...props} />
      ),
      hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-4 md:my-8" {...props} />
      ),
      table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
          <table className={cn("w-full", className)} {...props} />
        </div>
      ),
      tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
          className={cn("m-0 border-t p-0 even:bg-muted", className)}
          {...props}
        />
      ),
      th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
          className={cn(
            "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
            className
          )}
          {...props}
        />
      ),
      td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
          className={cn(
            "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
            className
          )}
          {...props}
        />
      ),
      Image: ({ className, src, ...props }: React.ComponentProps<typeof Image>) => (
        <Image
            src={src ?? ""}
            {...props}
            alt={props.alt ?? "Uncaptioned"}
            className={cn(className)}
        />
      ),
    ...components,
  }
}