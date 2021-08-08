import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

export default function ViewsDisplay({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);
  return `${views ? views.toLocaleString() : '–––'} views`;
}
