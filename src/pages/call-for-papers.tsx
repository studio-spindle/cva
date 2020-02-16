/* eslint-disable max-len */
import { NextPage } from 'next';

import { Grid, Container } from '@material-ui/core';
import Layout from '../components/Layout';

interface CallForPapersProps {
  title: string;
}

const CallForPapers: NextPage<CallForPapersProps> = ({ title }) => (
  <Layout siteTitle={title}>
    <Container maxWidth="lg">
      <Grid container direction="row" justify="space-around">
        <Grid item>
          <h1>Call For Papers</h1>
          <p><strong>Small excerpt</strong></p>
          <p>source: https://www.sollcorp.com/callforpapers/</p>
          <p>Audience: audience for the journal includes academia, professionals, community and government agencies, business and industry.</p>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-around">
        <Grid item>
          <h2>Submitting a paper</h2>
          <p>some info</p>
        </Grid>
        <Grid item>
          <h3>Steps:</h3>
          <p>&lt; horizontal steps &gt;</p>
          <ol>
            <li>Submit and revise</li>
            <li>Share and promote</li>
          </ol>
          <h4>1. Submit and revise</h4>
          <p>Submit a 500-word paper proposal first</p>
          <h4>2. Share and promote</h4>
          <p>Share your knowledge .... An example is the global conference in Paris in 2020. Wide audience ... and move forward in your career.</p>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-around">
        <Grid item>
          <h2>Upcoming Journal</h2>
          <p><strong>Volume 6, No. 2 Issue of the Journal of Creating Value</strong></p>
          <p>Release: November 2020</p>
          <h3>Current papers/articles</h3>
          <p>A list with titles of the papers/articles that are submitted</p>
          <ul>
            <li>
              <strong>Volume 6</strong>
              Issue 2, coming November 2020
            </li>
            <li>
              <strong>Volume 5, 2019</strong>
              Issue 2, Special Issue: Organizational Agility and Value Creation, Current Issue November 2019 , pp. 103–252
              Issue 1, May 2019 , pp. 1–99
            </li>
            <li>
              <strong>Volume 4</strong>
              Issue 2, Special Issue: Role of Technology and AI on Value Creation, November 2018, pp. 181–286
              Issue 1, May 2018 , pp. vii–179
            </li>
            <li>
              <strong>Volume 3</strong>
              Issue 2, November 2017 , pp. vii–242
              Issue 1, May 2017, pp. vii–116
            </li>
            <li>
              <strong>Volume 2</strong>
              Issue 2, November 2016, pp. vii–309
              Issue 1, May 2016, pp. vii–153
            </li>
            <li>
              <strong>Volume 1</strong>
              Issue 2, November 2015, pp. 149–297
              Issue 1, May 2015, pp. 1–148
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default CallForPapers;
