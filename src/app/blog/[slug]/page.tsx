import { getPostBySlug } from '@/lib/get-blog';
import { getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import useMDXComponents from '@/mdx-components';
import type { Metadata } from 'next'
import { calistoga } from '@/fonts/calistoga';

type Props = {
  params : {
    slug: string
  }
}

export async function generateMetadata(
  {params}: Props
): Promise<Metadata> {
  const post: any = await getPostBySlug(params.slug);

  return {
    title: post.title,
  };
}

const BlogPostPage = async ({ params }: any) => {
  const { slug } = params;
  const post: any = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
        <div >
            <Post post={{ title: post.title, date: post.date, author: post.author }} />
            <MDXRemote source={post.content} components={useMDXComponents({})} />
        </div>
  );
};

const Post = ({ post }: any) => (
  <div className='flex flex-col gap-3 mt-10'>
    <h1 className={`${calistoga.className} text-5xl font-bold`}>{post.title}</h1>
    <div className='flex gap-2 text-gray-500 text-sm items-center'>
      <p>{post.date}</p>
    </div>
  </div>
);

export const generateStaticParams = () => {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug
    }));
};

export default BlogPostPage;