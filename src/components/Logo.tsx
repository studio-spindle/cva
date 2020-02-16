import { FC } from 'react';
import { makeStyles, Grid, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  svg: {
    '& path': {
      stroke: theme.palette.primary.main,
    },
  },
  wordMark: {
    color: theme.palette.primary.main,
    fontFamily: "'Quicksand', georgia, sans-serif",
    fontSize: '1.4rem',
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

// const emblemDimension = 40;

const Logo: FC = () => {
  const classes = useStyles({});
  return (
    <Grid className={classes.logo} alignItems="center" direction="row" justify="center" container>
      <Grid item>
        {/* <svg */}
        {/*  viewBox="0 0 600 600" */}
        {/*  width={emblemDimension} */}
        {/*  height={emblemDimension} */}
        {/*  xmlns="http://www.w3.org/2000/svg" */}
        {/*  className={classes.svg} */}
        {/* > */}
        {/*  <path */}
        {/*    d="M120.395 120.395c-99.193 99.193-99.193 260.017 0 359.21 99.193 99.193 260.017 99.193 359.21 0l56.926-65.113-175.72-175.303c-33.585-33.585-88.037-33.585-121.622 0-33.585 33.585-33.585 88.037 0 121.622 33.585 33.585 88.037 33.585 121.622 0l175.72-183.997-56.926-56.42c-99.193-99.192-260.017-99.192-359.21 0z" */}
        {/*    stroke-width="90" */}
        {/*    fill="none" */}
        {/*    fill-rule="evenodd" */}
        {/*  /> */}
        {/* </svg> */}
      </Grid>
      <Grid item>
        <div className={classes.wordMark}>Creating Value Alliance</div>
      </Grid>
    </Grid>
  );
};

export default Logo;
