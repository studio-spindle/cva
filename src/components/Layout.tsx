import { FC, useState } from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
  Theme,
  CssBaseline,
} from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';
import Meta from './Meta';
import MainMenu from './MainMenu';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.main,
    width: drawerWidth,
  },
  drawerHeader: {
    padding: theme.spacing(1),
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
    marginRight: 0,
  },
}));

interface LayoutProps {
  siteTitle: string;
  siteDescription?: string;
}

const Layout: FC<LayoutProps> = (({
  siteTitle, siteDescription, children,
}) => {
  const classes = useStyles({});
  const theme = useTheme();
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
      <CssBaseline />
      <AppBar
        position="static"
        className={open ? classes.appBarShift : classes.appBar}
      >
        <Toolbar>
          <Grid container alignItems="flex-start" justify="flex-end">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              className={open ? classes.hide : ''}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <main
        className={open ? classes.content : classes.contentShift}
      >
        {children}
      </main>
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
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
