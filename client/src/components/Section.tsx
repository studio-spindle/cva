import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  backgroundWhite: {
    backgroundColor: theme.palette.common.white,
  },
  backgroundSecondary: {
    backgroundColor: theme.palette.secondary.dark,
  },
  sectionFirst: {
    marginTop: theme.spacing(9),
    position: 'relative',
    background: "url('./images/backgrounds/cva-emblem.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60vw -27rem',
    backgroundSize: '65rem 65rem',
    '&:after': {
      content: '""',
      position: 'absolute',
      backgroundImage: "url('/images/events/EDP/background_paris_street.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -2,
    },
    // '&:before': {
    //   content: '""',
    //   position: 'absolute',
    //   opacity: '0.92',
    //   background: 'linear-gradient(33deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 51%, rgba(252,252,252,1) 100%)',
    //   top: 0,
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
    //   zIndex: -1,
    // },
  },
  [theme.breakpoints.down('sm')]: {
    section: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  [theme.breakpoints.up('md')]: {
    section: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
    },
  },
}));

type backgroundColor = 'secondary' | 'white';

interface SectionProps {
  first?: boolean;
  backgroundColor?: backgroundColor;
}

const Section: FC<SectionProps> = ({ children, first, backgroundColor }) => {
  const classes = useStyles({});
  return (
    <section className={`
      ${classes.section}
      ${first && classes.sectionFirst}
      ${backgroundColor === 'secondary' && classes.backgroundSecondary}
      ${backgroundColor === 'white' && classes.backgroundWhite}
    `}
    >
      {children}
    </section>
  );
};

export default Section;
