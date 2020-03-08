import { FC } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    listStyleType: 'none',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const PromoListItem: FC = ({ children }, key) => {
  const classes = useStyles({});
  console.log('key: ', key);
  return (
    <li key={key} className={classes.root}>
      {children}
    </li>
  );
};

export default PromoListItem;
