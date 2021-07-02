import Head from 'next/head';
import { useRouter } from 'next/router';

import constants from '@/lib/constants';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Container(props) {
  const { children, titlePrefix, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: titlePrefix ? `${titlePrefix} - Nick Crews` : "Nick Crews – Build Stuff",
    description: `Software Engineer, Physicist, Teacher, and Learner.`,
    image: `${constants.url}/static/images/banner.png`,
    type: 'website',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${constants.url}${router.asPath}`} />
        <link rel="canonical" href={`${constants.url}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nick Crews" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <NavBar />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-white dark:bg-black mt-32"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
