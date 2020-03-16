import { NextPage } from 'next';
import Page from '../components/Page';
import { Data, PostBlog } from '../shared.types';
import usePosts from '../hooks/usePosts';
import BlogList from '../components/BlogList';
import Loading from '../components/Loading';

const Blog: NextPage = () => {
  const posts: Data<PostBlog>[] | null = usePosts();
  return (
    <Page title="Blog">
      {posts === null && <Loading />}
      {posts && (
        <BlogList posts={posts} />
      )}
    </Page>
  );
};

export default Blog;
