import { FC } from 'react';
import { Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tags from './Tags';
import Tag from './Tag';
import PromoList from './PromoList';
import PromoListItem from './PromoListItem';
import { Data } from '../shared.types';

interface BlogPosts {
  posts: Data[];
}

const useStyles = makeStyles((theme: Theme) => ({
  promoListTitle: {
    paddingBottom: theme.spacing(1),
  },
}));

const BlogList: FC<BlogPosts> = ({ posts }) => {
  const classes = useStyles({});
  console.log(posts);
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
