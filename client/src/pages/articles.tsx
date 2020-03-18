import { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { Button, Box, Grid, Typography, Theme, Divider } from '@material-ui/core';
import { Clear as ClearIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../components/Page';
import FuzzySearch from '../components/FuzzySearch';
import ArticleIssue from '../components/ArticleIssue';
import ArticleDetail from '../components/ArticleDetail';
import { Article } from '../shared.types';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    paddingBottom: theme.spacing(8),
  },
  body: {
    marginTop: theme.spacing(4),
  },
  noResults: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
  closeIconContainer: {
    marginLeft: 'auto',
  },
}));

interface HandleSearchArgs {
  noResults: boolean;
  articles?: Article[] | undefined;
}

const Articles: NextPage = () => {
  const classes = useStyles({});
  const [searchResults, setSearchResults] = useState<Article[] | undefined>();
  const [noSearchResults, setNoSearchResults] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const handleSearch = ({ noResults, articles }: HandleSearchArgs): void => {
    setNoSearchResults(noResults);
    setSearchResults(articles);
  };

  const handleSearchTermUpdate = (term: string): void => {
    setSearchTerm(term);
  };

  const handleClear = (): void => {
    console.log('clear please...');
  };

  return (
    <Page title="Articles">
      <Grid className={classes.hero} container direction="row" justify="center" alignItems="center">
        <Grid xs={12} md={6} item>
          <FuzzySearch onSearchSubmit={handleSearch} onSearchTermUpdate={handleSearchTermUpdate} />
        </Grid>
      </Grid>
      {searchResults && (
        <Grid className={classes.hero} container direction="row" justify="center" alignItems="center">
          <Grid xs={12} md={8} item>
            <Box display="flex">
              <Box alignSelf="center">
                <Typography component="span" variant="subtitle2">{searchResults.length} results found for &quot;{searchTerm}&quot;</Typography>
              </Box>
              <Box alignSelf="center" className={classes.closeIconContainer}>
                <Button startIcon={<ClearIcon />} onClick={handleClear}>Clear</Button>
              </Box>
            </Box>
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
        <Grid className={classes.noResults} container direction="row" justify="center" alignItems="center">
          <Grid xs={12} item>
            <Typography align="center"><strong>No Results found for &quot;{searchTerm}&quot;.</strong></Typography>
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
