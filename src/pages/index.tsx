import { NextPage } from 'next';

import { Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Layout from '../components/Layout';

interface IndexProps {
  title: string;
  description: string;
}

const Index: NextPage<IndexProps> = ({ title, description }) => (
  <Layout siteTitle={title} siteDescription={description}>
    <div>
      <p>3rd Global conference on Creating Value</p>
      <p>Location: Paris</p>
      <p>June 2-3 2020</p>
      <Button>
        Read more
      </Button>
      <Button
        variant="outlined"
        color="primary"
        endIcon={<ArrowForward />}
      >
        Buy tickets
      </Button>
    </div>
  </Layout>
);

export default Index;
