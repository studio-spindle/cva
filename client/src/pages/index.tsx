import { NextPage } from 'next';
import { Grid, Container, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import EventList from '../components/EventList';
import Loading from '../components/Loading';
import CountryList from '../components/CountryList';
import { Data, PostEvent } from '../shared.types';
import useEvents from '../hooks/useEvents';

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  sectionFirst: {
    marginTop: theme.spacing(9),
    position: 'relative',
    background: "url('./images/backgrounds/cva-emblem.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60vw -27rem',
    backgroundSize: '65rem 65rem',
    '&:after': {
      content: '""',
      position: 'absolute',
      backgroundImage: "url('./images/backgrounds/large-ecole-des-ponts-business-school.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -2,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      opacity: '0.92',
      background: 'linear-gradient(33deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 51%, rgba(252,252,252,1) 100%)',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
    },
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
  lastSectionHeading: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
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
                <Button color="primary" variant="contained" endIcon={<ArrowForwardRounded />}>
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
          <Grid container direction="row" justify="center" alignItems="center" className={classes.lastSectionHeading}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h2" align="center" gutterBottom>
                Learn about value thinking
              </Typography>
            </Grid>
            <CountryList />
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
