import { NextPage } from 'next';
import Page from '../components/Page';
import Link from 'next/link';
import { Grid, Typography, Button } from '@material-ui/core';
import { ArrowForwardRounded } from '@material-ui/icons';

const Blog: NextPage = () => {
  return (
    <Page title="Countries">
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h3">
            Netherlands
          </Typography>
          <Typography gutterBottom>
            A little text
          </Typography>
          <Link href="/nl" passHref>
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
    </Page>
  );
};

export default Blog;
