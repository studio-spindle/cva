import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Theme } from '@material-ui/core';

import Layout from '../components/Layout';

interface BlogProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Blog: NextPage<BlogProps> = ({ title }) => {
  const classes = useStyles({});
  return (
    <Layout siteTitle={title}>
      <Container className={classes.container} maxWidth="lg" fixed>
        <p>This will be the overview of the blog page</p>
      </Container>
    </Layout>
  );
};

export default Blog;
