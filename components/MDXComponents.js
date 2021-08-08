import Link from 'next/link';
import Image from 'next/image';

import Analytics from '@/components/metrics/Analytics';
import GfycatGIF from '@/components/GfycatGIF';
import ResponsiveIframe from '@/components/ReponsiveIframe';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}></a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Analytics,
  GfycatGIF,
  ResponsiveIframe,
};

export default MDXComponents;
