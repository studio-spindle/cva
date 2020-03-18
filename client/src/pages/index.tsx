import { NextPage } from 'next';
import Link from 'next/link';
import { Grid, Container, Typography, Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { ArrowForwardRounded } from '@material-ui/icons';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import EventList from '../components/EventList';
import Loading from '../components/Loading';
import { Data, PostEvent } from '../shared.types';
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
              {/* <Link href="/events" passHref>
                <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
                  View all events
                </Button>
              </Link> */}
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
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h3">
                Netherlands
              </Typography>
              <Typography gutterBottom>
                A little text
              </Typography>
              <Link href="/posts" passHref>
                <Button color="secondary" variant="contained" endIcon={<ArrowForwardRounded />}>
                  View all posts
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h3">
                Denmark (coming soon)
              </Typography>
              <Typography>
                A little text
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h3">
                Japan (coming soon)
              </Typography>
              <Typography>
                A little text
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
