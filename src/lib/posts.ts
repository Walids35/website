import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/markdown/blogs');

export function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      
      const { data } = matter(fileContents);
  
      return {
        slug: filename.replace('.mdx', ''),
        title: data.title || filename.replace('.mdx', '').replace(/-/g, ' '),
        date: data.date || null,
        description: data.description || null,
      };
    });
  
    return posts;
}