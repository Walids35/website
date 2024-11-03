import { getPostBySlug, getPrivacyPost } from "@/lib/get-blog";
import useMDXComponents from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

const page = async () => {
  const post = await getPrivacyPost("privacy");
  if (!post) {
    return <div>Post not found</div>;
  }
  return <MDXRemote source={post.content} components={useMDXComponents({})} />;
};

export default page;
