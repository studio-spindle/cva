import { NextPage } from 'next';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { BubbleChart as BubbleChartIcon } from '@material-ui/icons';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Layout from '../components/Layout';
import Section from '../components/Section';
import InfoBlock from '../components/InfoBlock';

const listItems = [
  {
    key: 1,
    text:
      `Supporting the international Journal of Creating Value (Sage Publications) which
      creates a space for academics, practitioners and policy makers to develop and
      share and publish original ideas.`,
  },
  {
    key: 2,
    text:
      `Organizing Annual Global Conferences on Creating Value – a forum which assembles
      international thought leaders on value creation in business, consulting, academia
      and policy making.`,
  },
  {
    key: 3,
    text:
      `Building an international network of people supporting the development and
      dissemination of the value creation concept and mindset.`,
  },
  {
    key: 4,
    text:
      `Supporting initiatives of our members to lead or join activities such as workshops,
      seminars and webinars that further the aims of the Creating Value Alliance.`,
  },
  {
    key: 5,
    text:
      `Introducing, collating and disseminating ideas and practices of value creation in
      all areas of society the world around. We welcome fresh and thought-provoking
      approaches.`,
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  firstSection: {
    paddingTop: theme.spacing(8),
  },
}));

const About: NextPage = () => {
  const classes: ClassNameMap<string> = useStyles({});
  return (
    <>
      <Layout siteTitle="About Creating Value Alliance">
        <Section noPadding>
          <Grid container justify="space-around" className={classes.firstSection}>
            <Grid item xs={10} md={8}>
              <Typography variant="h3" component="h1" gutterBottom>Creating Value Alliance</Typography>
              <Typography>
                The Creating Value Alliance unites business leaders, consultants, academics,
                professionals and policy makers from around the world together to exchange views,
                share and learn from each other about the concept and practice of creating value.
                Solid knowledge, experiences and acceptance of the value creation concept are
                prerequisites to spread the value creation mindset.
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section noPadding>
          <Grid container direction="row">
            <Grid item xs={12} md={6}>
              <InfoBlock>
                <Typography variant="h3" component="h2" gutterBottom>Why</Typography>
                <Typography>
                A value creation mindset drives thought processes and actions that are needed to realize
                purposeful, sustainable and prosperous societies, companies, institutions, NGO’s, and
                think-tanks. It provides a wider and more meaningful view of complex problems to solve
                than the yet important but fragmented and narrow expert views. For companies this is a
                key to increased profitability – but a profitability with awareness and understanding of
                the underpinning long-term factors. For non-commercial organizations it is a key to
                higher societal impact and appreciation.
                </Typography>
              </InfoBlock>
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBlock>
                <Typography variant="h3" component="h2" gutterBottom>How</Typography>
                <Typography>
                  The Creating Value Alliance seeks to achieve its aims through:
                </Typography>
                {listItems.length !== 0 && (
                  <List>
                    {listItems.map(({ key, text }) => (
                      <ListItem key={key} alignItems="flex-start" disableGutters>
                        <ListItemIcon>
                          <BubbleChartIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="body2">
                            {text}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                )}
              </InfoBlock>
            </Grid>
          </Grid>
        </Section>
      </Layout>
    </>
  );
};

export default About;
