import { useState } from 'react';

import Divider from './Divider';

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6 prose">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>1995</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Started looking for engineering work 🔎">
          I'm extremely excited to look for a cross-functional role where I can
          use my coding skills to help non-coders.
        </Step>
        <Step title="Moved to Bozeman, Montana 📦">
          It was time to move out of the van.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Skied and climbed my brains out ⛷️">
          I had always wanted to focus on these passions of mine. My partner and
          I road tripped across much of the western US.
        </Step>
        <Step title="Started Brain Juice Tutoring 🧠">
          I remotely teach 1:1 high-school- and college-level math, physics, and
          CS. Check out{' '}
          <a href="https://brainjuice.school">brainjuice.school</a>.
        </Step>
        <Step title="Moved into a van 🚗">
          Just like everyone else and their grandma, apparently.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Quit Google">
          I wanted to reassess what sort of work I was doing, and a chance to
          focus full time on skiing and climbing.
        </Step>
      </ul>
      <Year>2018</Year>
      <ul>
        <Step title="Started at Google 👨‍💻">
          I worked on the ChromeOS team in Boulder, CO. I led the firmware
          effort for a new Chromebook device, and did a lot of Linux Kernel
          programming in C, as well as some C++, Python, and Go.
        </Step>
        <Step title="Graduated College 🎉">
          Graduated from Colorado College with bachelors degrees in Computer
          Science and Physics, plus a minor in Math.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
