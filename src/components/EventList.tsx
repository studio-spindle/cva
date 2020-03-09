import { FC } from 'react';
import { Typography, Theme, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { LocationOn as LocationOnIcon } from '@material-ui/icons';
import PromoList from './PromoList';
import PromoListItem from './PromoListItem';
import { Data, PostEvent } from '../shared.types';
import Year from './Year';

interface EventListProps {
  posts: Data<PostEvent>[];
}

const useStyles = makeStyles((theme: Theme) => ({
  promoListTitle: {
    paddingBottom: theme.spacing(1),
  },
  eventPaper: {
    padding: theme.spacing(2),
  },
  flatPaper: {
    boxShadow: 'none',
  },
  elevateOnHover: {
    boxShadow: theme.shadows[10],
  },
}));

const EventList: FC<EventListProps> = ({ posts }) => {
  const classes: ClassNameMap<string> = useStyles({});
  console.log(posts);

  const sortedPosts: Data<PostEvent>[] = posts.sort((post, nextPost) => {
    return nextPost.document.data.timeStampEpoch - post.document.data.timeStampEpoch;
  });

  const amountOfPosts = 3;
  return (
    <PromoList>
      {sortedPosts.slice(0, amountOfPosts).map(({ document: { data }, slug }, index) => {
        const { title, intro, location, date, timeStampEpoch } = data;
        const firstEvent = index === 0;
        const otherEvents = index !== 0;
        return (
          <PromoListItem key={slug}>
            <Paper
              className={`${classes.eventPaper} ${firstEvent ? classes.elevateOnHover : ''} ${
                otherEvents ? classes.flatPaper : ''
              }`}
            >
              <Typography variant="overline" display="block">
                {date}, <Year timeStamp={timeStampEpoch} />
              </Typography>
              <Typography component="h3" variant="h5" className={classes.promoListTitle}>
                {title}
              </Typography>
              {firstEvent && <Typography variant="body2" gutterBottom>{intro}</Typography>}
              <Box alignItems="center" display="flex">
                <Box>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="overline">{location}</Typography>
                </Box>
              </Box>
            </Paper>
          </PromoListItem>
        );
      })}
    </PromoList>
  );
};

export default EventList;
