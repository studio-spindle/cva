import { NextPage } from 'next';

import Layout from '../components/Layout';

interface ContactProps {
  title: string;
}

const Contact: NextPage<ContactProps> = ({ title }) => (
  <Layout siteTitle={title}>
    <p>Contact page</p>
  </Layout>
);

export default Contact;
