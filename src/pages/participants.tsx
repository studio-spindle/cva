import { NextPage } from 'next';

import Layout from '../components/Layout';

interface ParticipantsProps {
  title: string;
}

const Participants: NextPage<ParticipantsProps> = ({ title }) => (
  <Layout siteTitle={title}>
    <p>Participants page</p>
  </Layout>
);

export default Participants;
