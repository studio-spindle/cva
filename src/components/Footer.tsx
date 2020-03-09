import { FC } from 'react';
import { Theme, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.grey[400]}`,
  },
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  copyrightText: {
    fontFamily: theme.typography.h1.fontFamily,
    fontWeight: 'bold',
  },
  [theme.breakpoints.only('xs')]: {
    footer: {
      marginTop: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('sm')]: {
    footer: {
      marginTop: theme.spacing(15),
    },
  },
}));

const Footer: FC = () => {
  const classes = useStyles({});
  return (
    <footer className={classes.footer}>
      <Container className={classes.container} maxWidth="lg">
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body2">
              <small className={classes.copyrightText}>© {new Date().getFullYear()} Creating Value Alliance</small>
            </Typography>
          </Grid>
          <Grid item>
            ...
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
