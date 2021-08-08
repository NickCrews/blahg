import { useState } from 'react';

import Container from '@/components/Container';
import { fromPost } from '@/components/ProjectCard';
import { allPosts } from '@/lib/mdx';
import CardGrid from '@/components/CardGrid';

export default function Projects({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.meta.publishedAt)) -
        Number(new Date(a.meta.publishedAt))
    )
    .filter((post) =>
      post.meta.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  const projectCards = filteredPosts.map((post) => fromPost(post));

  return (
    <Container
      titlePrefix="Projects"
      description="Some of my past work with software, engineering, design, and teaching."
    >
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`Here you can read about some of my past projects I've worked on,
            as well as find some other things I find interesting.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
        </h3>
        {!filteredPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        <CardGrid>{projectCards}</CardGrid>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await allPosts();
  return { props: { posts } };
}
