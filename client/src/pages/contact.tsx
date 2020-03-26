import { NextPage } from 'next';
import { Grid, Typography, Link, List, ListItem, ListItemText } from '@material-ui/core';
import Page from '../templates/Page';
import SuperText from '../components/SuperText';

const mailAddresses = [
  { name: 'Marcel Kwakernaak', title: 'Founding director', mailAddress: 'm.kwakernaak@cva.co' },
  { name: 'Martijn Rademakers', title: 'Founding director', mailAddress: 'm.rademakers@cva.co' },
];

const Contact: NextPage = () => (
  <Page title="Contact" siteTitle="Contact">
    <Grid container alignItems="stretch">
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Netherlands
        </Typography>
        <List>
          {mailAddresses.map(({ name, mailAddress, title }) => (
            <ListItem key={mailAddress}>
              <ListItemText
                primary={(
                  <Link color="secondary" href={`mailto:${mailAddress}`}>
                    {name}
                  </Link>
                )}
                secondary={(
                  <Typography variant="body2">{title}</Typography>
                )}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Denmark
          <SuperText>(Coming soon)</SuperText>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Japan
          <SuperText>(Coming soon)</SuperText>
        </Typography>
      </Grid>
    </Grid>
  </Page>
);

export default Contact;
