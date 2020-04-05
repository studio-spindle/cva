/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
  Theme,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MenuRounded as MenuIcon, CancelRounded as CancelIcon } from '@material-ui/icons';
import Meta from './Meta';
import Logo from './Logo';
import MainMenu from './MainMenu';
import Footer from './Footer';

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      backgroundColor: '#fefefe',
    },
  },
  root: {
    display: 'flex',
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  appBarFull: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  link: {
    textDecoration: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.dark,
    width: drawerWidth,
  },
  drawerHeader: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuIcon: {
    marginTop: theme.spacing(1),
    '&:hover': {
      transition: 'transform 100ms ease-in',
      transform: 'rotate(-90deg)',
    },
  },
  closeIcon: {
    color: 'white',
    marginRight: theme.spacing(2),
    '&:hover': {
      transition: 'transform 100ms ease-in',
      transform: 'rotate(-90deg)',
    },
  },
  largeIcon: {
    width: 35,
    height: 35,
  },
  [theme.breakpoints.down('sm')]: {
    oldLogoContainer: {
      display: 'none',
    },
  },
  [theme.breakpoints.up('sm')]: {
    contentShift: {
      marginRight: drawerWidth,
    },
    appBarShift: {
      marginRight: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    oldLogoContainer: {
      borderLeft: `1px solid ${theme.palette.grey[300]}`,
      '& img': {
        display: 'flex',
        width: '90px',
        height: '60px',
      },
    },
  },
}));

interface LayoutProps {
  siteTitle: string;
  siteDescription?: string;
  invertHeader?: boolean;
  homePage?: boolean;
}

const Layout: FC<LayoutProps> = (({
  siteTitle, siteDescription, invertHeader, children, homePage,
}) => {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
      <AppBar
        position="static"
        className={`${classes.appBar} ${open ? classes.appBarShift : classes.appBarFull}`}
      >
        <Toolbar>
          <Grid container alignItems="flex-start" justify="space-between">
            <Grid xs={10} item>
              <Box display="flex" alignItems="center">
                <Link href="/">
                  <a className={classes.link}>
                    <Logo white={invertHeader} />
                  </a>
                </Link>
                {homePage && (
                  <Box
                    display="flex"
                    className={classes.oldLogoContainer}
                    alignItems="center"
                    mx={3}
                    px={3}
                  >
                    <img src="/images/generic/logo_cva_old.png" alt="old logo creating value alliance" />
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid xs={2} md="auto" item>
              <IconButton
                aria-label="menu"
                color="secondary"
                edge="end"
                onClick={handleDrawerOpen}
                className={`${classes.menuIcon} ${open ? classes.hide : ''}`}
              >
                <MenuIcon className={classes.largeIcon} style={invertHeader ? { color: 'white' } : {}} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main
        className={open ? classes.contentShift : classes.content}
      >
        {children}
      </main>
      <Footer shift={open} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Grid container alignItems="flex-start" justify="flex-end">
            <IconButton className={classes.closeIcon} onClick={handleDrawerClose}>
              <CancelIcon className={classes.largeIcon} />
            </IconButton>
          </Grid>
        </div>
        <Divider />
        <MainMenu />
      </Drawer>
    </>
  );
});

export default Layout;
