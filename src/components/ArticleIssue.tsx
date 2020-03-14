import { FC, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';
import Loading from './Loading';

interface Article {
  issue: number;
  title: string;
  year: number;
  doi: string;
  journal: string;
  volume: string;
  uuid: string;
  abstract: string;
}

interface ArticlesData {
  Get: {
    Things: {
      Article: Article[];
    };
  };
}

const GET_BY_ISSUE = gql`
  query getArticlesByIssue($issue: String, $year: String) {
    Get {
      Things {
        Article(where: {
          operator: And,
          operands: [{
            path: ["issue"],
            operator: Equal,
            valueString: $issue
          },{
            path: ["year"],
            operator: Equal,
            valueString: $year
          }]
        }) {
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

const byYear = (a, b): number => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
};

interface ArticleIssueProps {
  year: string;
  issue: string;
}

const ArticleIssue: FC<ArticleIssueProps> = ({ year, issue }) => {
  const {
    loading,
    error,
    data,
  } = useQuery<ArticlesData>(GET_BY_ISSUE, {
    variables: {
      issue,
      year,
    },
  });

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    async function getData() {
      const editions: Article[] = await data?.Get.Things.Article.sort(byYear);
      console.log(editions);
      return editions;
    }
    getData();
  }, [data]);

  return (
    <Grid container direction="row" justify="center">
      {loading && <Loading />}
      {error && <p>There was an error loading the articles. Please try again later.</p>}
      {data && (
        <>
          <Grid xs={12} md={4} item>
            <Typography display="inline" variant="h5" component="p">Issue: {issue}</Typography>
            {' '}
            <Typography display="inline" variant="h5" component="p">Year: {year}</Typography>
          </Grid>
          <Grid xs={12} md={8} item>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Articles...
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ flexDirection: 'column' }}>
                {data.Get.Things.Article.map(({ title }) => (
                  <Box display="flex" component="article" key={title}>
                    <Typography variant="h6" component="h2">{title}</Typography>
                  </Box>
                ))}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ArticleIssue;
