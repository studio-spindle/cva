import { NextPage, NextPageContext } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Box, Container, Grid, Theme, Typography } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import { DocumentFrontMatter, PostBlog } from '../../shared.types';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  intro: {
    marginBottom: theme.spacing(3),
  },
  small: {
    fontSize: '1rem',
  },
  author: {
    marginBottom: theme.spacing(4),
  },
  profileImage: {
    width: '5rem',
    marginRight: theme.spacing(3),
    '& img': {
      borderRadius: '50%',
      width: '100%',
    },
  },
  [theme.breakpoints.down('sm')]: {
    firstContent: {
      marginTop: theme.spacing(6),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(12),
    },
  },
}));

interface BlogTemplateProps {
  siteTitle: string;
  data: PostBlog;
  content: string;
}

const BlogTemplate: NextPage<BlogTemplateProps> = ({ siteTitle, content, data }) => {
  const classes: ClassNameMap<string> = useStyles({});
  const markdownBody: string = content;
  const frontmatter: PostBlog = data;

  const {
    title,
    intro,
    authorImageUrl,
    author,
    date,
  } = frontmatter;

  return (
    <Layout siteTitle={siteTitle}>
      <Container className={classes.container} maxWidth="lg">
        <Grid component="article" alignItems="center" container className={classes.firstContent} direction="column" justify="center">
          <Grid item>
            <Typography variant="overline">Category Name</Typography>
            <Typography variant="h1" gutterBottom>
              {title}
            </Typography>
            <Typography className={classes.intro} gutterBottom>
              {intro}
            </Typography>
            <Grid alignItems="center" className={classes.author} container>
              {authorImageUrl && (
                <Grid item>
                  <div className={classes.profileImage}>
                    <img src={authorImageUrl} alt="" />
                  </div>
                </Grid>
              )}
              <Grid item>
                <Typography className={classes.small}>{author}</Typography>
                <Typography className={classes.small}>{date}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box component="div" className={`${classes.divider} ${classes.mediumGutter}`} />
            <ReactMarkdown source={markdownBody} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

BlogTemplate.getInitialProps = async (context: NextPageContext): Promise<BlogTemplateProps> => {
  const { slug } = context.query;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import('../../data/config.json');
  const data = matter(content.default) as DocumentFrontMatter<PostBlog>;

  return {
    siteTitle: config.title,
    ...data,
  };
};

export default BlogTemplate;
