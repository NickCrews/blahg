import { useEffect } from 'react';

import ViewsDisplay from './ViewsDisplay';

export default function ViewCounter({ slug }) {
  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  return <ViewsDisplay slug={slug} />;
}
