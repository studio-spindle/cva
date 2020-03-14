import { NextPage } from 'next';
import { TextField, Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../components/Page';
import ArticleIssue from '../components/ArticleIssue';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    paddingBottom: theme.spacing(8),
  },
  body: {
    marginTop: theme.spacing(4),
  },
}));

const Articles: NextPage = () => {
  const classes = useStyles({});

  return (
    <Page title="Articles">
      <Grid className={classes.hero} container direction="row" justify="center" alignItems="center">
        <Grid xs={12} md={6} item>
          <form>
            <TextField id="outlined-basic" label="Search for Articles" variant="outlined" fullWidth />
          </form>
        </Grid>
      </Grid>
      <Grid className={classes.body} container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item>
          <ArticleIssue year="2015" issue="1" />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Articles;
