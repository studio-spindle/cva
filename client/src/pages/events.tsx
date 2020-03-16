import { NextPage } from 'next';
import Page from '../components/Page';
import useEvents from '../hooks/useEvents';
import { Data, PostEvent } from '../shared.types';
import Loading from '../components/Loading';
import EventList from '../components/EventList';

const Blog: NextPage = () => {
  const events: Data<PostEvent>[] | null = useEvents();
  return (
    <Page title="Events">
      <p>(example: https://pontsbschool.com/creating-value/)</p>
      <h2>Buy tickets</h2>
      <h2>Apply to participate: ... </h2>
      <p>Be part of ...</p>
      <h3>Get involved</h3>
      <p>Submit a ...</p>
      <h2>Form with suggestions: ...</h2>
      {events === null && <Loading />}
      {events && <EventList posts={events} />}
    </Page>
  );
};

export default Blog;
