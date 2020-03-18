import { FC } from 'react';
import { Theme, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './Layout';

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
  footerShift: {
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

interface FooterProps {
  shift: boolean;
}

const Footer: FC<FooterProps> = ({ shift }) => {
  const classes = useStyles({});
  return (
    <footer className={`${classes.footer} ${shift ? classes.footerShift : ''}`}>
      <Container className={classes.container} maxWidth="lg">
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body2">
              <small className={classes.copyrightText}>
                © {new Date().getFullYear()} Creating Value Alliance
              </small>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
