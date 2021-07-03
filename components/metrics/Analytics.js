import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import constants from '@/lib/constants';
import MetricCard from '@/components/metrics/Card';

export default function Analytics() {
  const { data } = useSWR('/api/views', fetcher);

  const pageViews = new Number(data?.total);

  return (
    <MetricCard
      header="All-Time Views"
      link={constants.url}
      metric={pageViews}
    />
  );
}
