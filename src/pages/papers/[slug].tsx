import { NextPage, NextPageContext } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

interface BlogTemplateProps {
  siteTitle: string;
  content: string;
  data: { title?; author?; date?; hero_image? };
}

const BlogTemplate: NextPage<BlogTemplateProps> = ({ siteTitle, content, data }) => {
  const markdownBody = content;
  const frontmatter = data;
  return (
    <Layout siteTitle={siteTitle}>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
};

BlogTemplate.getInitialProps = async (context: NextPageContext): Promise<BlogTemplateProps> => {
  const { slug } = context.query;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import('../../data/config.json');
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data,
  };
};

export default BlogTemplate;
