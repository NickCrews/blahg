import Link from 'next/link';

import Container from '../components/Container';
import { fromPost } from '../components/ProjectCard';
import { postFromSlug } from '@/lib/mdx';

export default function Home({ featuredProjects }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hello, Friend!
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I like to build things, both in computer code and in real life. Here,
          you can check out some of my past projects and ideas.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Featured Projects
        </h3>
        {featuredProjects.map((post) => fromPost(post))}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          About
        </h3>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          {'You can learn more about my story and background on the '}
          <Link href="/about">
            <a>about page.</a>
          </Link>
        </h2>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const featuredProjects = [
    await postFromSlug('force-sensor'),
    await postFromSlug('chrome-os'),
    await postFromSlug('virtuwall'),
  ];
  return { props: { featuredProjects } };
}
