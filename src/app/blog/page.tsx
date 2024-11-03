import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Timer } from "lucide-react";
import { calistoga } from "@/fonts/calistoga";
import { Input } from "@/components/ui/input";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <section className="flex flex-col gap-5 mt-8 mb-16">
        <h1
              className={`${calistoga.className} text-5xl dark:text-white`}
            >
              my blogs.
            </h1>
        <Input placeholder="Search for a blog" />
        <ul className="flex flex-col gap-10">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-lg border">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col gap-3 my-5 mx-5">
                  <h2 className="text-lg font-medium">{post.title}</h2>
                  <p className="text-sm dark:text-gray-500">{post.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        </section>
  );
}
