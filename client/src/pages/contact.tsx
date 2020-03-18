import { NextPage } from 'next';
import { Grid, Typography } from '@material-ui/core';
import Page from '../components/Page';

const Contact: NextPage = () => (
  <Page title="Contact">
    <Grid container alignItems="stretch">
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h2">
          Netherlands
        </Typography>
        <Typography gutterBottom>
          Add Contact info here
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h2">
          Denmark
        </Typography>
        <Typography>
          Add Contact info here
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h2">
          Japan
        </Typography>
        <Typography>
          Add Contact info here
        </Typography>
      </Grid>
    </Grid>
  </Page>
);

export default Contact;
