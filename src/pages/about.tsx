import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';

interface AboutProps {
  title: string;
}

const markdownMission = `
  ## Mission
  ### What do we do?
  ### Whom do we serve?
  ### How do we serve them?
`;

const markdownVision = `
  ## Vision
  ### What are our hopes and dreams?
  ### What problem are we solving for the greater good?
  ### Who and what are we inspiring to change?
`;

const About: NextPage<AboutProps> = ({ title }) => (
  <Layout siteTitle={title}>
    <ReactMarkdown source={markdownMission} />
    <ReactMarkdown source={markdownVision} />
  </Layout>
);

export default About;
