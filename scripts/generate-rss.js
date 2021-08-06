const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const constants = require('../lib/constants');

async function generate() {
  const feed = new RSS({
    title: constants.title,
    site_url: constants.url,
    feed_url: `${constants.url}/feed.xml`,
  });

  const posts = await fs.readdir(
    path.join(__dirname, '..', 'data', 'projects')
  );

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(
        path.join(__dirname, '..', 'data', 'projects', name)
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: `${constants.url}/projects/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
