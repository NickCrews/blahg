import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import Divider from '@/components/Divider';
import ViewsCounter from '@/components/ViewsCounter';

const editUrl = (slug) =>
  `https://github.com/NickCrews/blahg/edit/main/data/projects/${slug}.mdx`;

export default function ProjectLayout({ children, meta, slug }) {
  return (
    <Container
      titlePrefix={meta.title}
      description={meta.summary}
      image={`https://nickcrews.me${meta.image}`}
      date={new Date(meta.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {meta.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Nick Crews"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {meta.by}
              {'Nick Crews / '}
              {format(parseISO(meta.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {meta.readingTime.text}
            {` • `}
            <ViewsCounter slug={slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <Divider />
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a href={editUrl(slug)} target="_blank" rel="noopener noreferrer">
            {'Edit this page on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
