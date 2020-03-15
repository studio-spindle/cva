import { FC } from 'react';
import { Box, Theme, Typography } from '@material-ui/core';
import { LocationOn as LocationOnIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PromoList from './PromoList';
import PromoListItem from './PromoListItem';
import { Data, PostEvent } from '../shared.types';
import Card from './Card';

const useStyles = makeStyles((theme: Theme) => ({
  iconLocation: {
    color: theme.palette.text.secondary,
  },
}));

interface EventListProps {
  posts: Data<PostEvent>[];
}

const EventList: FC<EventListProps> = ({ posts }) => {
  const classes = useStyles({});
  const sortedPosts: Data<PostEvent>[] = posts.sort(
    (post, nextPost) => nextPost.document.data.timeStampEpoch - post.document.data.timeStampEpoch,
  );

  const amountOfPosts = 3;
  return (
    <PromoList>
      {sortedPosts.slice(0, amountOfPosts).map(
        (
          {
            document: {
              data: { location },
              data,
            },
            slug,
          },
          index,
        ) => {
          const firstEvent = index === 0;

          return (
            <PromoListItem key={slug}>
              <Card highlight={firstEvent} showIntro={firstEvent} slug={`/events/${slug}`} {...data}>
                <Box alignItems="center" display="flex">
                  <Box mr={0.5}>
                    <LocationOnIcon className={classes.iconLocation} />
                  </Box>
                  <Box>
                    <Typography color="textSecondary" variant="overline">
                      {location}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </PromoListItem>
          );
        },
      )}
    </PromoList>
  );
};

export default EventList;
