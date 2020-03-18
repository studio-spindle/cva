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
      {events === null && <Loading />}
      {events && <EventList posts={events} />}
    </Page>
  );
};

export default Blog;
