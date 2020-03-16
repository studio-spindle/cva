import { NextPage } from 'next';
import Link from 'next/link';
import { Grid, Container, Typography, Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { ArrowForwardRounded } from '@material-ui/icons';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import BlogList from '../components/BlogList';
import EventList from '../components/EventList';
import Loading from '../components/Loading';
import { Data, PostEvent, PostBlog } from '../shared.types';
import usePosts from '../hooks/usePosts';
import useEvents from '../hooks/useEvents';

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
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
  eventMainInfo: {
    marginBottom: theme.spacing(6),
  },
  horizontalAction: {
    marginTop: theme.spacing(6),
  },
}));

interface IndexProps {
  title: string;
  description: string;
}

const Index: NextPage<IndexProps> = ({ title, description }) => {
  const classes: ClassNameMap<string> = useStyles({});

  const posts: Data<PostBlog>[] | null = usePosts();
  const events: Data<PostEvent>[] | null = useEvents();

  return (
    <Layout siteTitle={title} siteDescription={description}>
      <Jumbo />

      <section className={`${classes.section} ${classes.sectionFirst}`}>
        <Container className={classes.container} maxWidth="lg">
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item xs={12} md={4} className={classes.eventMainInfo}>
              <Typography variant="h3" component="h2" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography variant="body1" gutterBottom>
                Connect with thinkers for <em>inspiration</em> and new <em>opportunities</em>.
              </Typography>
              <Link href="/events" passHref>
                <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
                  View all events
                </Button>
              </Link>
            </Grid>
            {events === null && <Loading />}
            {events && (
              <Grid item xs={12} md={6}>
                <EventList posts={events} />
              </Grid>
            )}
          </Grid>
        </Container>
      </section>

      <section className={classes.section}>
        <Container className={classes.container} fixed maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" align="center" gutterBottom>
                Learn about value thinking
              </Typography>
            </Grid>
          </Grid>
          {posts === null && <Loading />}
          {posts && (
            <>
              <Grid container>
                <Grid item xs={12}>
                  <BlogList posts={posts} />
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center" className={classes.horizontalAction}>
                <Grid item>
                  <Link href="/blog" passHref>
                    <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
                      View All Blogposts
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
