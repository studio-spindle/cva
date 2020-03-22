import { NextPage } from 'next';
import { Container } from '@material-ui/core';
import Page from '../templates/Page';
import { Data, PostBlog } from '../shared.types';
import usePosts from '../hooks/usePosts';
import BlogList from '../components/BlogList';
import Loading from '../components/Loading';

const Blog: NextPage = () => {
  const posts: Data<PostBlog>[] | null = usePosts('NL');
  return (
    <Page title="Netherlands">
      <Container maxWidth="md">
        {posts === null && <Loading />}
        {posts && (
          <BlogList posts={posts} />
        )}
      </Container>
    </Page>
  );
};

export default Blog;
