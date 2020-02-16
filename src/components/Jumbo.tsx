import { FC, useEffect, useState } from 'react';
import { Container, Grid, Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

const animationTimout = 500;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  intro: {
    width: '100%',
    maxWidth: '680px',
    fontSize: '1.2rem',
    lineHeight: '2.5rem',
    color: 'rgba(0,0,0,.8)',
  },
  jumboHidden: {
    opacity: 0,
    transform: 'matrix(1,0,0,1,0,20)',
  },
  jumboTransitionEnter: {
    opacity: 1,
    transform: 'matrix(1,0,0,1,0,0)',
    transition: `all ${animationTimout}ms ease-in`,
  },
  [theme.breakpoints.up('md')]: {
    container: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    jumbo: {
      paddingTop: '2%',
      paddingBottom: '2%',
    },
  },
}));

const intro = `The creating value alliance is a movement for business leaders and academics to build value for
              themselves and their institutions; to share value creating experiences and to inculcate a value creating 
              mindset, so they can make value waiting to happen a reality, and create value for themselves.`;

const Jumbo: FC = () => {
  const classes = useStyles({});
  const [inProp, setInProp] = useState(false);
  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    setInProp(true);
    const timeout = window.setTimeout(() => {
      setHidden(false);
    }, animationTimout);

    return (): void => window.clearInterval(timeout);
  }, []);
  return (
    <Container
      maxWidth="md"
      className={classes.container}
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
      >
        <CSSTransition
          in={inProp}
          timeout={animationTimout}
          appear
          classNames={{
            enter: classes.jumboTransitionEnter,
          }}
        >
          <Grid item className={`${classes.jumbo} ${isHidden ? classes.jumboHidden : null}`}>
            <Typography
              variant="h1"
              className={classes.title}
            >
              A title of a few words
            </Typography>
            <Typography
              className={classes.intro}
              gutterBottom
            >
              {intro}
            </Typography>
          </Grid>
        </CSSTransition>
      </Grid>
    </Container>
  );
};

export default Jumbo;
