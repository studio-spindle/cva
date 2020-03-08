import { FC } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    listStyleType: 'none',
    margin: '0',
  },
}));

const PromoList: FC = ({ children }) => {
  const classes = useStyles({});
  return (
    <ul className={classes.root}>
      {children}
    </ul>
  );
};

export default PromoList;
