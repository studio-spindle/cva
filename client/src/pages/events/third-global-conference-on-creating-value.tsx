import { NextPage } from 'next';
import Event from '../../templates/Event';
import { PostEvent } from '../../shared.types';

export const eventDetails: PostEvent = {
  title: 'Third global conference on creating value',
  intro: 'This is a small intro that is displayed. You can add a bit of information which a visitor can scan easily.',
  location: 'Ecole Des Ponts Business School',
  city: 'Paris, France',
  address: '6-8 Avenue Blaise Pascal, 77420 Champs-sur-Marne, France',
  date: 'June 2-3',
  timeStampEpoch: 1591092000,
};

const ThirdConference: NextPage = () => <Event data={eventDetails} />;

export default ThirdConference;
