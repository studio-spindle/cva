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
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    firstContent: {
      marginTop: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(8),
    },
  },
}));

const Blog: NextPage<BlogProps> = ({ title }) => {
  const classes = useStyles({});
  return (
    <Layout siteTitle="Blog">
      <Container className={classes.container} maxWidth="lg" fixed>
        <Grid component="article" container direction="row" justify="space-around" className={classes.firstContent}>
          <div>
            <Typography variant="h2" component="h1" className={classes.smallGutter}>
              Blog
            </Typography>
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Blog;
