import Link from 'next/link';

import ViewsDisplay from './ViewsDisplay';

const ProjectPost = ({ title, summary, slug }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a className="w-full mb-8">
        {/* TODO this, but I style it better first */}
        {/* <Image
          src={image.src}
          height={image.height}
          width={mage.width}
        /> */}
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
            <ViewsDisplay slug={slug} />
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      </a>
    </Link>
  );
};

export default ProjectPost;

export function fromPost(post) {
  return (
    <ProjectPost
      key={post.slug}
      title={post.meta.title}
      summary={post.meta.summary}
      slug={post.slug}
    />
  );
}