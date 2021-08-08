import useMySWR from '@/lib/useMySWR';

import Track from '@/components/Track';

export default function TopTracks() {
  const data = useMySWR('/api/top-tracks');

  if (!data) {
    return null;
  }

  return data.tracks.map((track, index) => (
    <Track ranking={index + 1} key={track.songUrl} {...track} />
  ));
}
