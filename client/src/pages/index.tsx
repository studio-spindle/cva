import { NextPage } from 'next';
import { Grid, Container, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';
import EventList from '../components/EventList';
import CountryList from '../components/CountryList';
import Section from '../components/Section';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  buttonReadMore: {
    marginRight: '10px',
  },
  white: {
    color: 'white',
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

const Index: NextPage<IndexProps> = ({ description }) => {
  const classes: ClassNameMap<string> = useStyles({});

  return (
    <Layout siteTitle="Home | Creating Value Alliance" siteDescription={description} homePage>
      <Jumbo />

      <Section first>
        <Container className={classes.container} maxWidth="lg">
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <Grid item xs={12} md={4} className={classes.eventMainInfo}>
              <Typography className={classes.white} variant="h3" component="h2" gutterBottom>
                Events
              </Typography>
              <Typography className={classes.white} variant="body1" gutterBottom>
                Connect with thinkers for <em>inspiration</em> and new <em>opportunities</em>.
              </Typography>
              {/* <Link href="/events" passHref>
                <Button color="primary" variant="contained" endIcon={<ArrowForwardRounded />}>
                  View all events
                </Button>
              </Link> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <EventList />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
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
      </Section>
    </Layout>
  );
};

export default Index;
