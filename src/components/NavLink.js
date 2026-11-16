'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import PropTypes from 'prop-types';

/**
* Next.js link for the site navbar.
* @param {{L: {path: string, label: string}}} props
* @return {import('react').ReactElement}
*/
function NavLink({L}) {
  const pathname = usePathname();
  const className = pathname === L.path ? 'nav-link active' : 'nav-link';
  return (
    <li className='nav-item'>
      <Link href={L.path} className={className}>
        {L.label}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  L: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavLink;
