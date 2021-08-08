import useSWR from 'swr';

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export default function useMySWR(endpoint) {
  const { data } = useSWR(endpoint, fetcher);
  return data;
}
