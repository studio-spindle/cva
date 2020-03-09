import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const useStyles = makeStyles(() => ({
  root: {
    listStyleType: 'none',
    margin: '0',
  },
}));

const PromoList: FC = ({ children }) => {
  const classes: ClassNameMap<string> = useStyles({});
  return (
    <ul className={classes.root}>
      {children}
    </ul>
  );
};

export default PromoList;
