import { FC } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
}));

const Tags: FC = ({ children }) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Tags;
