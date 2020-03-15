import { FC, FormEvent, useEffect } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { useLazyQuery, useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
    (): void;
  };
}

const FuzzySearch: FC<FuzzySearchProps> = ({ searchEventTriggered }) => {
  const client = useApolloClient();
  const [runQuery, { data, loading, error }] = useLazyQuery(GET_BY_TERM);

  useEffect((): void => {
    if (data) {
      client.writeQuery({
        query: SEARCH_QUERY_ARTICLES,
        data: {
          searchQueryArticles: data.Get.Things.Article,
        },
      });
      searchEventTriggered();
    }
  }, [client, data, searchEventTriggered]);

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
