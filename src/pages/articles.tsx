import { NextPage } from 'next';
import { TextField, Grid } from '@material-ui/core';
import Page from '../components/Page';

const Articles: NextPage = () => (
  <Page title="Articles">
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid xs={12} md={6} item>
        <form>
          <TextField
            id="outlined-basic"
            label="Search for Articles"
            variant="outlined"
            fullWidth
          />
        </form>
      </Grid>
    </Grid>
  </Page>
);

export default Articles;
