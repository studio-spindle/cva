import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
