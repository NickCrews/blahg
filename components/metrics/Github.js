import useMySWR from '@/lib/useMySWR';
import MetricCard from '@/components/metrics/Card';

export default function GitHub() {
  const data = useMySWR('/api/github');

  const stars = new Number(data?.stars);
  const link = 'https://github.com/NickCrews';

  return <MetricCard header="GitHub Stars" link={link} metric={stars} />;
}
