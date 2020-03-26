import { NextPage } from 'next';
import Page from '../templates/Page';
import CountryList from '../components/CountryList';

const Blog: NextPage = () => (
  <Page title="Countries" siteTitle="Countries">
    <CountryList />
  </Page>
);

export default Blog;
