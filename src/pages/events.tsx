import { NextPage } from 'next';

import Layout from '../components/Layout';

interface EventsProps {
  title: string;
}

const Events: NextPage<EventsProps> = ({ title }) => (
  <Layout siteTitle={title}>
    <p>Events page</p>
    <p>(example: https://pontsbschool.com/creating-value/)</p>
    <h2>Buy tickets</h2>
    <p />
    <h2>Apply to participate: ... </h2>
    <p>Be part of ...</p>
    <h3>Get involved</h3>
    <p>Submit a ...</p>
    <h2>Form with suggestions: ...</h2>
    <p />
  </Layout>
);

export default Events;
