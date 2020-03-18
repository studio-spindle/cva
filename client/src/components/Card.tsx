import { FC } from 'react';
import { CardActionArea, CardContent, Paper, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

import Year from './Year';
import Link from './Link';

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
  cardActionArea: {
    color: theme.palette.text.primary,
  },
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
}));

interface CardProps {
  highlight?: boolean;
  showIntro?: boolean;
  title: string;
  slug: string;
  date: string;
  location?: string;
  timeStampEpoch?: number;
  intro?: string;
}

const defaultProps = {
  highlight: false,
  intro: undefined,
  location: undefined,
  timeStampEpoch: undefined,
};

const Card: FC<CardProps> = ({
  children,
  highlight,
  showIntro,
  title,
  slug,
  date,
  timeStampEpoch,
  intro,
}) => {
  const classes: ClassNameMap<string> = useStyles({});

  return (
    <Paper
      className={`${classes.eventPaper} ${highlight ? classes.elevateOnHover : ''} ${
        !highlight ? classes.flatPaper : ''
      }`}
    >
      <CardActionArea className={classes.cardActionArea} component={Link} disableRipple href={slug}>
        <CardContent>
          <Typography variant="overline" display="block">
            {date}
            {timeStampEpoch && (
              <>
                {', '}
                <Year timeStamp={timeStampEpoch} />
              </>
            )}
          </Typography>
          <Typography component="h3" variant="h5" className={`${classes.promoListTitle} ${classes.smallGutter}`}>
            {title}
          </Typography>
          {showIntro && (
            <Typography variant="body2" className={classes.smallGutter}>
              {intro}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {children}
    </Paper>
  );
};

Card.defaultProps = defaultProps;

export default Card;
