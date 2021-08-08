import Analytics from '@/components/metrics/Analytics';
import Container from '@/components/Container';
import GitHub from '@/components/metrics/Github';
import TopTracks from '@/components/TopTracks';

export default function Dashboard() {
  return (
    <Container
      titlePrefix="Dashboard"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Here are a few stats on me, this website, and my GitHub. Mostly this
            is a demo of a few interesting uses of serverless functions and
            Next.js API routes.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Want to see something creepy? Here are my top tracks on Spotify,
          updated daily. This shows off using serverless functions to query the
          Spotify API.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
