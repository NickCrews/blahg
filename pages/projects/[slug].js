import { MDXRemote } from 'next-mdx-remote';

import { allSlugs, postFromSlug } from '@/lib/mdx';
import ProjectLayout from '@/layouts/project';
import MDXComponents from '@/components/MDXComponents';

export default function Project({ mdxContent, meta }) {
  return (
    <ProjectLayout meta={meta}>
      <MDXRemote
        {...mdxContent}
        components={{
          ...MDXComponents,
        }}
      />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  const slugs = allSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await postFromSlug(params.slug);
  return { props: { meta: post.meta, mdxContent: post.mdxContent } };
}
