import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Theme } from '@material-ui/core';

import Layout from '../components/Layout';

interface BlogProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  intro: {
    marginBottom: theme.spacing(3),
  },
  small: {
    fontSize: '1rem',
  },
  author: {
    marginBottom: theme.spacing(4),
  },
  profileImage: {
    width: '5rem',
    marginRight: theme.spacing(3),
    '& img': {
      borderRadius: '50%',
      width: '100%',
    },
  },
  [theme.breakpoints.down('sm')]: {
    firstContent: {
      marginTop: theme.spacing(6),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(12),
    },
  },
}));

const Blog: NextPage<BlogProps> = ({ title }) => {
  const classes = useStyles({});
  return (
    <Layout siteTitle={title}>
      <Grid alignItems="center" container className={classes.firstContent} direction="column" justify="center">
        <Grid item>
          <Container maxWidth="md" fixed>
            <Typography variant="overline">Category Name</Typography>
            <Typography variant="h1" gutterBottom>
              Blogitem title of a few meaningful words
            </Typography>
            <Typography className={classes.intro} gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis eget erat varius
              consectetur. Maecenas ut lectus condimentum nunc interdum dignissim non nec velit. In tellus nisi,
              posuerea in condimentum et, scelerisque non lorem.
            </Typography>
            <Grid alignItems="center" className={classes.author} container>
              <Grid item>
                <div className={classes.profileImage}>
                  <img src="/images/Marcel-Kwakernaak.jpg" alt="" />
                </div>
              </Grid>
              <Grid item>
                <Typography className={classes.small}>Marcel Kwakernaak</Typography>
                <Typography className={classes.small}>22 Jan, 2020</Typography>
              </Grid>
            </Grid>
            <Typography variant="h2" gutterBottom>
              This is another headline
            </Typography>
            <Typography>
              Phasellus tincidunt, mi imperdiet porta tincidunt, lectus turpis commodo elit, quis convallis elit neque
              ut lacus. Donec magna quam, ullamcorper in dapibus sit amet, tincidunt eu quam. Vivamus suscipit dolor sed
              elit faucibus fermentum. Phasellus venenatis, dui vel ultrices finibus, elit eros laoreet nibh, vitae tincidunt metus sem id velit.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Blog;
