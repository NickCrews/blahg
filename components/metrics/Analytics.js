import useMySWR from '@/lib/useMySWR';

import constants from '@/lib/constants';
import MetricCard from '@/components/metrics/Card';

export default function Analytics() {
  const data = useMySWR('/api/views');

  const pageViews = new Number(data?.total);

  return (
    <MetricCard
      header="All-Time Views"
      link={constants.url}
      metric={pageViews}
    />
  );
}
