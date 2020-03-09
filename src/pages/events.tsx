import { NextPage } from 'next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

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

interface EventsProps {
  title: string;
}

const Events: NextPage<EventsProps> = () => {
  const classes = useStyles({});
  return (
    <Layout siteTitle="Events">
      <Container component="article" className={classes.container} maxWidth="lg">
        <Grid component="article" container direction="row" justify="space-around" className={classes.firstContent}>
          <div>
            <Typography variant="h2" component="h1" className={classes.smallGutter}>
              Events
            </Typography>
            <p>(example: https://pontsbschool.com/creating-value/)</p>
            <h2>Buy tickets</h2>
            <h2>Apply to participate: ... </h2>
            <p>Be part of ...</p>
            <h3>Get involved</h3>
            <p>Submit a ...</p>
            <h2>Form with suggestions: ...</h2>
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Events;
