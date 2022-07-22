import React, { useEffect } from 'react';

export interface PiwikTrackerProps {
  siteId: string;
}

export const PiwikTracker = ({ siteId }: PiwikTrackerProps) => {
  const u = 'https://statistiek.rijksoverheid.nl/piwik/';
  const src = `${u}piwik.js`;

  useEffect(() => {
    const _paq = window['_paq'] || (window['_paq'] = []);
    _paq.push(['trackPageView'], ['enableLinkTracking'], ['setTrackerUrl', u + 'piwik.php'], ['setSiteId', siteId]);
  });

  // return <script type="text/javascript" defer async src={src} />;
  return <div>foooo</div>;
};
