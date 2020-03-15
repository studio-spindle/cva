import { FC, FormEvent, useEffect } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Article } from '../shared.types';

const GET_BY_TERM = gql`
  query getByTerm($searchTerm: [String]!) {
    Get {
      Things {
        Article (
          explore: {
            concepts: $searchTerm
            certainty: 0.8
          }
        ) {
          issue
          title
          year
          doi
          journal
          volume
          uuid
          abstract
        }
      }
    }
  }
`;

export const SEARCH_QUERY_ARTICLES = gql`
  query searchQueryArticles {
    searchQueryArticles
  }
`;

interface FuzzySearchProps {
  searchEventTriggered: {
    (data: { noResults: boolean; articles?: Article[] | undefined }): void;
  };
}

const FuzzySearch: FC<FuzzySearchProps> = ({ searchEventTriggered }) => {
  const [runQuery, { data, loading, error }] = useLazyQuery(GET_BY_TERM);

  useEffect((): void => {
    if (data) {
      searchEventTriggered({ noResults: false, articles: data?.Get?.Things?.Article });
    }
    if (error) {
      searchEventTriggered({ noResults: true });
    }
  }, [data, error, searchEventTriggered]);

  return (
    <form onSubmit={
      async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const searchTerm: string = formData.get('searchTerm') as string;
        runQuery({ variables: { searchTerm } });
      }
    }
    >
      <Box display="flex" flexDirection="row" flexGrow="1">
        <Box alignSelf="center" flexGrow={1}>
          <TextField
            id="searchTerm"
            name="searchTerm"
            label="Search for Articles"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box alignSelf="center" ml={2}>
          <Button size="large" variant="contained" type="submit" color="secondary">Search</Button>
        </Box>
      </Box>
    </form>
  );
}

export default FuzzySearch;
