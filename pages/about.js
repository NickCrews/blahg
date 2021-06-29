import Link from 'next/link';

import Container from '@/components/Container';
import Timeline from '@/components/Timeline';

export default function About() {
  return (
    <Container titlePrefix="About">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            I'm Nick. I like to build stuff, especially when it's a pairing that
            leverages computer science to directly solve problems in the physical world.

            I have experience as a software engineer, physicist, teacher, carpenter,
            and in an ideal project I get to exercise all these parts of my brain.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
