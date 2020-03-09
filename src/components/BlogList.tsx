import { FC } from 'react';
import { Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Tags from './Tags';
import Tag from './Tag';
import PromoList from './PromoList';
import PromoListItem from './PromoListItem';
import { Data, PostBlog } from '../shared.types';

interface BlogListProps {
  posts: Data<PostBlog>[];
}

const useStyles = makeStyles((theme: Theme) => ({
  promoListTitle: {
    paddingBottom: theme.spacing(1),
  },
}));

const BlogList: FC<BlogListProps> = ({ posts }) => {
  const classes: ClassNameMap<string> = useStyles({});
  return (
    <PromoList>
      {posts.map(({ document: { data }, slug }) => (
        <PromoListItem key={slug}>
          <Typography className={classes.promoListTitle}>{data.title}</Typography>
          {data.categories && (
            <Tags>
              {data.categories.map((category) => (
                <Tag key={category}>{category}</Tag>
              ))}
            </Tags>
          )}
        </PromoListItem>
      ))}
    </PromoList>
  );
};

export default BlogList;
