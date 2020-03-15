import { NextPage } from 'next';
import { useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { Grid, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../components/Page';
import FuzzySearch, { SEARCH_QUERY_ARTICLES } from '../components/FuzzySearch';
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
  const client = useApolloClient();
  const [searchResults, setSearchResults] = useState();
  const classes = useStyles({});

  const handleSearch = (): void => {
    const { searchQueryArticles } = client.readQuery({
      query: SEARCH_QUERY_ARTICLES,
    });
    if (searchQueryArticles) {
      setSearchResults(searchQueryArticles);
    }
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
          <Grid xs={12} md={6} item>
            {searchResults.map(({ title, uuid }) => (
              <div key={uuid}>
                <Typography>{title}</Typography>
              </div>
            ))}
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
