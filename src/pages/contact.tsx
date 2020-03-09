import { NextPage } from 'next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  smallGutter: {
    marginBottom: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    firstContent: {
      marginTop: theme.spacing(5),
    },
  },
  [theme.breakpoints.up('md')]: {
    firstContent: {
      marginTop: theme.spacing(8),
    },
  },
}));

const Contact: NextPage = () => {
  const classes = useStyles({});
  return (
    <Layout siteTitle="Contact">
      <Container component="article" className={classes.container} maxWidth="lg">
        <Grid component="article" container direction="row" justify="space-around" className={classes.firstContent}>
          <div>
            <Typography variant="h2" component="h1" className={classes.smallGutter}>
              Contact
            </Typography>
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;
