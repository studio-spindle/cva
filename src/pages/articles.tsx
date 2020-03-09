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
      <Grid item>
        <form>
          <TextField id="outlined-basic" label="Search for Articles" variant="outlined" />
        </form>
      </Grid>
    </Grid>
  </Page>
);

export default Articles;
