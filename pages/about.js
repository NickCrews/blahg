import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container';
import Timeline from '@/components/Timeline';

export default function About() {
  return (
    <Container titlePrefix="About">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
          About Me
        </h1>
        <Image
          alt={`Me, looking happy in the desert.`}
          src={`/static/me.jpg`}
          width={4912}
          height={3264}
          className="shadow-lg rounded-xl"
        />
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          I'm Nick. I like to build stuff, especially when it's a pairing that
          leverages computer science to directly solve problems in the physical
          world. I have experience as a software engineer, physicist, teacher,
          carpenter, and in an ideal project I get to exercise all these parts
          of my brain.
        </p>
        <Timeline />
      </div>
    </Container>
  );
}
