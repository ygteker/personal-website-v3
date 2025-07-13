import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { SiteHeader } from '@/components/site-header';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return (
    <>
      <SiteHeader />
      <div className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-semibold mb-2 text-foreground">{data.title}</h1>
        <p className="text-muted-foreground text-sm mb-6">{data.date}</p>
        <article
          className="prose prose-neutral dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </>
  );
}
