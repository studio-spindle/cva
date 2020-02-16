import { NextPage } from 'next';

import { Button, Grid, Container, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowForward } from '@material-ui/icons';
import Layout from '../components/Layout';
import Jumbo from '../components/Jumbo';

interface IndexProps {
  title: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) => ({
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

const Index: NextPage<IndexProps> = ({ title, description }) => {
  const classes = useStyles({});

  return (
    <Layout siteTitle={title} siteDescription={description}>
      <Jumbo />
      <Container maxWidth="lg">
        <Grid container direction="row" justify="space-around">
          <Grid item xs={12} md={4} className={`${classes.card} ${classes.cardHighlight}`}>
            <h2>Call for papers</h2>
            <p>Generic information...</p>
            {/* eslint-disable-next-line max-len */}
            <p>&lt; Explain the benefits for someone who submits a paper. &gt;</p>
            <ul>
              <li>Gain insights from industry leaders</li>
              <li>...</li>
            </ul>
            <p><strong>Journal of Creating Value</strong></p>
            <p>Volume 6, No. 2 Issue</p>
            <p>Deadline: 15 december 2019</p>
            <p>Release: November 2020</p>
            <div className={classes.cardAction}>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForward />}
              >
                Learn More
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.card}>
            <div className={classes.image}>
              <img src="/images/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg" alt="Global conference on Creating Value in Paris" />
            </div>
            <p><strong>Global conference on Creating Value</strong></p>
            <p>Location: Paris ...</p>
            <p>June 2-3, 2020</p>
            <div className={classes.cardAction}>
              <Button className={classes.buttonReadMore}>
                Read more
              </Button>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForward />}
              >
                Buy tickets
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.card}>
            <p>test</p>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Index;
