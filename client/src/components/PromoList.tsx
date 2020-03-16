import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const useStyles = makeStyles(() => ({
  root: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },
}));

interface BlogListProps {
  vertical?: boolean;
}

const PromoList: FC<BlogListProps> = ({ children }) => {
  const classes: ClassNameMap<string> = useStyles({});

  return (
    <ul className={classes.root}>
      {children}
    </ul>
  );
};

export default PromoList;
