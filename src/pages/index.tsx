import { NextPage } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';
import { Button, Grid, Container, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowForwardRounded } from '@material-ui/icons';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import BlogList from '../components/BlogList';
import { Data, Post } from '../shared.types';

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  sectionFirst: {
    marginTop: theme.spacing(9),
    backgroundColor: theme.palette.grey[300],
  },
  buttonReadMore: {
    marginRight: '10px',
  },
  card: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
    '&:not cardHighlight': {
      backgroundColor: 'white',
    },
  },
  cardHighlight: {
    backgroundColor: '#8AC7BB',
  },
  cardAction: {
    marginTop: theme.spacing(3),
  },
  image: {
    width: '300px',
    '& img': {
      width: '100%',
    },
  },
}));

interface IndexProps {
  title: string;
  description: string;
}

interface DocumentFrontMatter extends GrayMatterFile<Buffer> {
  data: Post;
  orig: Buffer;
}

const Index: NextPage<IndexProps> = ({ title, description }) => {
  const classes = useStyles({});

  const blogPosts = ((context): Data[] => {
    const keys = context.keys();
    const values: any = keys.map(context);

    const data: Data[] = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');

      const value: any = values[index];
      const document = matter(value.default) as DocumentFrontMatter;

      return {
        document,
        slug,
      };
    });

    return data;
  })(require.context('../posts', true, /\.md$/));

  return (
    <Layout siteTitle={title} siteDescription={description}>
      <Jumbo />
      <section className={`${classes.section} ${classes.sectionFirst}`}>
        <Container maxWidth="lg">
          <Grid container direction="row" justify="space-around">
            <Grid item xs={12} md={4}>
              <Typography variant="h3" component="h2" gutterBottom>
                Learn about value thinking
              </Typography>
              <Typography>
                Learn how you can transform your business into a
                <em>customer centric organisation</em>
                {' '}
                that
                {' '}
                <em>creates sustainable value</em>
                .
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogList posts={blogPosts} />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.section}>
        <Container maxWidth="lg">
          <Grid container direction="row" justify="space-around">
            <Grid item xs={12} md={4}>
              <div className={classes.image}>
                <img
                  src="/images/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg"
                  alt="Global conference on Creating Value in Paris"
                />
              </div>
              <Typography variant="h6" component="h3">
                Global conference on Creating Value
              </Typography>
              <p>Location: Paris ...</p>
              <p>June 2-3, 2020</p>
              <div className={classes.cardAction}>
                <p>Early bird ends...</p>
                <Button variant="contained" color="secondary" endIcon={<ArrowForwardRounded />}>
                  Buy tickets
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography>
                Connect with thinkers for
                {' '}
                <em>inspiration</em>
                {' '}
                and new
                {' '}
                <em>opportunities</em>
                .
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
