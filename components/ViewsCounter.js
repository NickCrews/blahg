import { useEffect } from 'react';

import ViewsDisplay from './ViewsDisplay';

export default function ViewsCounter({ slug }) {
  useEffect(
    () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      }),
    [slug]
  );

  return <ViewsDisplay slug={slug} />;
}
