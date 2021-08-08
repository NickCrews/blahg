import useMySWR from '@/lib/useMySWR';

export default function ViewsDisplay({ slug }) {
  const data = useMySWR(`/api/views/${slug}`);
  const views = new Number(data?.total);
  return `${views ? views.toLocaleString() : '–––'} views`;
}
