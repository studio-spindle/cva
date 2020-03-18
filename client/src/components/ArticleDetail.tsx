import { FC } from 'react';
import { Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Article } from '../shared.types';

interface ArticleProps {
  article: Article;
}

const useStyles = makeStyles((theme: Theme) => ({
  articleIssue: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  articleTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  articleAbstract: {
    fontSize: '1.2rem',
    lineHeight: '2rem',
    marginBottom: '1rem',
  },
}));

function truncateString(str: string, num: number): string {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
}

const ArticleDetail: FC<ArticleProps> = ({
  article: {
    title,
    abstract,
    year,
    uuid,
    doi,
  },
}) => {
  const classes = useStyles({});
  return (
    <>
      <Typography className={classes.articleTitle} component="h2">
        {title}
      </Typography>
      <Typography className={classes.articleAbstract}>
        {truncateString(abstract, 240)}
      </Typography>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="button" component="span" color="textSecondary">
            Year: {year}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" component="span" color="textSecondary">
            UUID: {uuid}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" component="span" color="textSecondary">
            DOI: {doi}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticleDetail;
