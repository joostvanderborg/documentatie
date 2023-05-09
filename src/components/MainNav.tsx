import React from 'react';
import clsx from 'clsx';

import { items } from '@site/navConfig';
import style from './MainNav.module.css';
import Link from '@docusaurus/Link';

export const MainNav = () => {
  return (
    <div className={clsx(style['main-nav'], 'utrecht-navhtml')}>
      <nav className="topnav">
        <ul className="utrecht-topnav__list">
          {items.map(({ to, href, label, current, focus, focusVisible }) => (
            <li className="utrecht-topnav__item">
              <Link
                className={clsx(
                  'utrecht-topnav__link',
                  current && 'utrecht-topnav__link--current',
                  focus && 'utrecht-topnav__link--focus',
                  focusVisible && 'utrecht-topnav__link--focus-visible',
                )}
                href={href}
                to={to}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
