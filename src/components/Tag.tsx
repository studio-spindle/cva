import { FC } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[600],
    borderRadius: '1rem',
    display: 'flex',
    fontSize: '.75rem',
    fontFamily: theme.typography.h1.fontFamily,
    padding: theme.spacing(1),
    '&:not(:last-child)': {
      marginRight: '.5rem',
    },
  },
}));

const Tag: FC = ({ children }) => {
  const classes = useStyles({});
  return (
    <span className={classes.root}>
      {children}
    </span>
  );
};

export default Tag;
