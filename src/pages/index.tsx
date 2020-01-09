import { NextPage } from 'next';
import Link from 'next/link';
import matter, { GrayMatterFile } from 'gray-matter';

import Layout from '../components/Layout';

interface Value {
  default: string;
}
type Post = { document: GrayMatterFile<string>; slug: string };

interface IndexProps {
  title: string;
  description: string;
  posts: Post[];
}

const Index: NextPage<IndexProps> = ({ title, description, posts }) => (
  <Layout pathname="/" siteTitle={title} siteDescription={description}>
    <h1>Welcome to Next.js!</h1>

    {posts.length >= 1 && (
      <ul>
        {posts.map((post) => {
          // eslint-disable-next-line no-console
          console.log(post);
          return (
            <li key={post.slug}>
              <Link href={{ pathname: `/nl/${post.slug}` }}>
                <a>{post.slug}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    )}
  </Layout>
);

Index.getInitialProps = async (): Promise<IndexProps> => {
  const siteConfig = await import('../data/config.json');
  const posts = ((context): Post[] => {
    const keys: Array<string> = context.keys();
    const values: {} = keys.map<[Value]>(context);
    const data: Post[] = keys.map(
      (key, index): Post => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.');
        // get the current file value
        const value: Value = values[index];
        // Parse front matter & markdown body for the current file
        const document = matter(value.default);
        return {
          document,
          slug,
        };
      },
    );

    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    posts,
    ...siteConfig,
  };
};

export default Index;
