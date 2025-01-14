[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FNickCrews%2blahg)

# Nick Crews's personal website

Forked from https://github.com/leerob/leerob.io. Thanks to Lee for all the work getting
this set up. I took it and added my own content a tweaked a lot of things, but
a lot of the logic and architecting should be credited to him.

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://nickcrews.me/dashboard), newsletter subscription, and post views.
- `pages/projects/*` - Static pre-rendered project writeups using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://nickcrews.me/dashboard) containing metrics like sales, views, and subscribers.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/NickCrews/blahg
$ cd blahg
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env.example`](/.env.example).

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)
