/* eslint-disable jsx-a11y/anchor-has-content */
import { forwardRef, FC } from 'react';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & NextLinkProps;

const NextComposed = forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
  const {
    as, href, replace, scroll, passHref, shallow, prefetch, ...other
  } = props;

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type LinkProps = LinkPropsBase & NextComposedProps & Omit<MuiLinkProps, 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link: FC<LinkPropsBase> = (props: LinkProps) => {
  const {
    href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = `${classNameProps} ${router.pathname === pathname && activeClassName ? activeClassName : ''}`;

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href as string}
      {...other}
    />
  );
};

// eslint-disable-next-line max-len
export default forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => <Link {...props} innerRef={ref} />);
