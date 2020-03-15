import { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { Box, Grid, Typography, Theme, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../components/Page';
import FuzzySearch from '../components/FuzzySearch';
import ArticleIssue from '../components/ArticleIssue';
import ArticleDetail from '../components/ArticleDetail';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    paddingBottom: theme.spacing(8),
  },
  body: {
    marginTop: theme.spacing(4),
  },
}));

const Articles: NextPage = () => {
  const [searchResults, setSearchResults] = useState();
  const [noSearchResults, setNoSearchResults] = useState(false);
  const classes = useStyles({});

  const handleSearch = ({ noResults, articles }): void => {
    setNoSearchResults(noResults);
    setSearchResults(articles);
  };

  return (
    <Page title="Articles">
      <Grid className={classes.hero} container direction="row" justify="center" alignItems="center">
        <Grid xs={12} md={6} item>
          <FuzzySearch searchEventTriggered={handleSearch} />
        </Grid>
      </Grid>
      {searchResults && (
        <Grid className={classes.hero} container direction="row" justify="center" alignItems="center">
          <Grid xs={12} md={8} item>
            <Typography variant="subtitle2">{searchResults.length} results found</Typography>
          </Grid>
          <Grid xs={12} md={8} item>
            {searchResults.map((article, index) => {
              const lastItem: boolean = index === searchResults.length - 1;
              const firstItem: boolean = index === 0;
              return (
                <Fragment key={`${article.uuid}`}>
                  <Box pt={firstItem ? 1 : 4} mt={2} pb={3} mb={3}>
                    <ArticleDetail article={article} />
                  </Box>
                  {!lastItem && <Divider />}
                </Fragment>
              );
            })}
          </Grid>
        </Grid>
      )}
      {noSearchResults && (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid xs={12} item>
            <Typography align="center"><strong>No Results found.</strong></Typography>
          </Grid>
        </Grid>
      )}
      {!searchResults && (
        <Grid className={classes.body} container direction="row" justify="center" alignItems="center">
          <Grid xs={12} item>
            <Typography gutterBottom>Journal of Creating Value</Typography>
          </Grid>
          <Grid xs={12} item>
            <ArticleIssue issue="2" />
            <ArticleIssue issue="1" />
          </Grid>
        </Grid>
      )}
    </Page>
  );
};

export default Articles;
