import { FC } from 'react';
import { List, ListItem } from '@material-ui/core';
import Link from './Link';

const pages = [
  { title: 'Home', href: '/' },
  { title: 'Participants', href: '/participants' },
  { title: 'Call for papers', href: '/call-for-papers' },
  { title: 'About', href: '/about' },
  { title: 'Events', href: '/events' },
  { title: 'Contact', href: '/contact' },
];

const MainMenu: FC = () => (
  <List component="nav" aria-label="main main-navigation">
    {pages.map(({ href, title }) => (
      <ListItem
        button
        component={Link}
        href={href}
        key={title}
      >
        {title}
      </ListItem>
    ))}
  </List>
);

export default MainMenu;
