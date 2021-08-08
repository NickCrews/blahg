import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

import imageInfo from './imageInfo';

const articleDir = path.join(process.cwd(), 'data', 'projects');

function getPath(slug) {
  return path.join(articleDir, `${slug}.mdx`);
}

async function parseMdx(content) {
  const opts = {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor'],
            },
          },
        ],
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  };
  return await serialize(content, opts);
}

export async function postFromSlug(slug) {
  const source = fs.readFileSync(getPath(slug), 'utf8');
  const { data, content } = matter(source);
  const mdxContent = await parseMdx(content);
  const meta = {
    title: data.title,
    publishedAt: data.publishedAt,
    summary: data.summary,
    image: imageInfo(data.image),
    wordCount: content.split(/\s+/gu).length,
    readingTime: readingTime(content),
  };
  return {
    slug: slug,
    meta: meta,
    mdxContent: mdxContent,
  };
}

export function allSlugs() {
  const files = fs.readdirSync(articleDir);
  return files.map((f) => f.replace('.mdx', ''));
}

export async function allPosts() {
  const slugs = allSlugs();
  return Promise.all(slugs.map((slug) => postFromSlug(slug)));
}
