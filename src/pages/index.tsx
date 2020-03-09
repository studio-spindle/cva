import { NextPage } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';
import { Grid, Container, Typography, Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import BlogList from '../components/BlogList';
import EventList from '../components/EventList';
import { Data, PostEvent, PostBlog } from '../shared.types';
import { ArrowForwardRounded } from '@material-ui/icons';

interface DocumentFrontMatter<T> extends GrayMatterFile<Buffer> {
  data: T;
  orig: Buffer;
}

function importAll<T>(webpackContext: __WebpackModuleApi.RequireContext): Data<T>[] {
  return webpackContext.keys().map(
    (fileUrl): Data<T> => {
      const body = webpackContext(fileUrl);

      const slug: string = fileUrl;
      const document = matter(body.default) as DocumentFrontMatter<T>;

      return {
        slug,
        document,
      };
    },
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  sectionFirst: {
    marginTop: theme.spacing(9),
    backgroundColor: theme.palette.grey[300],
  },
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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

const Index: NextPage<IndexProps> = ({ title, description }) => {
  const classes: ClassNameMap<string> = useStyles({});

  const posts: Data<PostBlog>[] = importAll(require.context('../posts', true, /\.md$/));
  const events: Data<PostEvent>[] = importAll(require.context('../events', true, /\.md$/));

  return (
    <Layout siteTitle={title} siteDescription={description}>
      <Jumbo />

      <section className={`${classes.section} ${classes.sectionFirst}`}>
        <Container className={classes.container} maxWidth="lg">
          <Grid container direction="row" justify="space-around">
            <Grid item xs={12} md={4}>
              <Typography variant="h3" component="h2" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography variant="body1" gutterBottom>
                Connect with thinkers for <em>inspiration</em> and new <em>opportunities</em>.
              </Typography>
              <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
                View all events
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <EventList posts={events} />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.section}>
        <Container className={classes.container} maxWidth="lg">
          <Grid container direction="row" justify="space-around">
            <Grid item xs={12} md={4}>
              <Typography variant="h3" component="h2" gutterBottom>
                Learn about value thinking
              </Typography>
              <Typography>
                Learn how you can transform your business into a<em>customer centric organisation</em> that{' '}
                <em>creates sustainable value</em>.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogList posts={posts} />
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
