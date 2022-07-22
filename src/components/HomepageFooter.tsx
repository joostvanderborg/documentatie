import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import style from './HomepageFooter.module.css';
import { PiwikTracker } from './PiwikTracker';

export const HomepageFooter = ({ children }: PropsWithChildren<{}>) => (
  <>
    <div className={clsx(style['homepage-footer'])}>
      <div className={clsx(style['homepage-footer__container'], 'container')}>{children}</div>
    </div>
    <p>bla bla</p>
    <PiwikTracker siteId="219" />
  </>
);
