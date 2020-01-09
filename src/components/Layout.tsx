import { FC } from 'react';
import Meta from './Meta';

interface LayoutProps {
  pathname?: string;
  siteTitle: string;
  siteDescription?: string;
}

const Layout: FC<LayoutProps> = ({
  pathname, siteTitle, siteDescription, children,
}) => (
  <section>
    <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
    {children}
  </section>
);

export default Layout;
