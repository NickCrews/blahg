import Link from 'next/link';

import ViewsDisplay from './ViewsDisplay';

export default function ProjectCard({ title, summary, slug }) {
  return (
    <Link href={`/projects/${slug}`}>
      <a className="w-full mb-8">
        {/* TODO this, but I style it better first */}
        {/* <Image
          src={image.src}
          height={image.height}
          width={mage.width}
        /> */}
        <div className="flex flex-col justify-between">
          <h4 className="text-lg font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="text-gray-500 text-left w-32 mb-4">
            <ViewsDisplay slug={slug} />
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      </a>
    </Link>
  );
}

export function fromPost(post) {
  return (
    <ProjectCard
      key={post.slug}
      title={post.meta.title}
      summary={post.meta.summary}
      slug={post.slug}
    />
  );
}
