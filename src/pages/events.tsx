import { NextPage } from 'next';

import Layout from '../components/Layout';

interface EventsProps {
  title: string;
}

const Events: NextPage<EventsProps> = ({ title }) => (
  <Layout siteTitle={title}>
    <p>Events page</p>
  </Layout>
);

export default Events;
