import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPostBySlug = async (slug: string) => {
    const postsDirectory = path.join(process.cwd(), 'src/markdown');
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null; 
    }
  
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
  
    return {
      slug,
      content,
      ...data,
    };
  };