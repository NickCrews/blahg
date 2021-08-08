import Link from 'next/link';
import Image from 'next/image';

import ViewsDisplay from './ViewsDisplay';

export default function ProjectCard({ title, summary, slug, image }) {
  return (
    <Link href={`/projects/${slug}`}>
      <a className="mb-8 border rounded-b-xl">
        <Image src={image.src} height={image.height} width={image.width} />
        <div className="m-2">
          <h4 className="text-lg font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="text-gray-500 text-left w-32 mb-4">
            <ViewsDisplay slug={slug} />
          </p>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
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
      image={post.meta.image}
    />
  );
}
