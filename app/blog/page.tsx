import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';

export default function BlogIndexPage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
    };
  });

  return (
    <>
      <SiteHeader />
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-semibold mb-8 text-foreground">Blog</h1>
        <ul className="py-6 last:py-0 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="hover:underline text-lg text-foreground">
                  {post.title}
                </div>
                <p className="text-muted-foreground text-sm">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
