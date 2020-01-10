import { NextPage } from 'next';

import Layout from '../components/Layout';

interface CallForPapersProps {
  title: string;
}

const CallForPapers: NextPage<CallForPapersProps> = ({ title }) => (
  <Layout siteTitle={title}>
    <p>CallForPapers page</p>
  </Layout>
);

export default CallForPapers;
