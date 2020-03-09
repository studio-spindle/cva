import { NextPage, NextPageContext } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Container, Grid, Theme, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { DocumentFrontMatter, PostEvent } from '../../shared.types';
import Layout from '../../components/Layout';
import Year from '../../components/Year';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
  mediumGutter: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.only('xs')]: {
    divider: {
      margin: `0 ${theme.spacing(2)}`,
    },
  },
  [theme.breakpoints.up('sm')]: {
    divider: {
      margin: `0 ${theme.spacing(4)}`,
    },
  },
  [theme.breakpoints.down('sm')]: {
    firstContent: {
      marginTop: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(8),
    },
  },
}));

interface EventTemplateProps {
  siteTitle: string;
  data: PostEvent;
  content: string;
}

const EventTemplate: NextPage<EventTemplateProps> = ({ content, data }) => {
  const classes: ClassNameMap<string> = useStyles({});
  const markdownBody: string = content;
  const frontmatter: PostEvent = data;

  const {
    title,
    intro,
    location,
    city,
    address,
    date,
    timeStampEpoch,
  } = frontmatter;

  return (
    <Layout siteTitle={title}>
      <Container component="article" className={classes.container} maxWidth="lg">
        <Grid component="article" container direction="row" justify="space-around" className={classes.firstContent}>
          <Grid item xs={12} md={8}>
            <Typography variant="overline" display="block">
              {date}, <Year timeStamp={timeStampEpoch} />
            </Typography>
            <Typography variant="h2" component="h1" className={classes.smallGutter}>
              {title}
            </Typography>
            <Typography className={classes.mediumGutter}>{intro}</Typography>
            <Box component="div" className={`${classes.divider} ${classes.mediumGutter}`} />
            <ReactMarkdown source={markdownBody} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

EventTemplate.getInitialProps = async (context: NextPageContext): Promise<EventTemplateProps> => {
  const { slug } = context.query;
  const content = await import(`../../events/${slug}.md`);
  const config = await import('../../data/config.json');
  const data = matter(content.default) as DocumentFrontMatter<PostEvent>;

  return {
    siteTitle: config.title,
    ...data,
  };
};

export default EventTemplate;
