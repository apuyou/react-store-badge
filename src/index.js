import React from 'react';

import appStoreBadge from './appstore.svg';
import googlePlayBadge from './googleplay.svg';

function Badge({ name, url, svg, alt, className }) {
  return (
    <a href={url} title={name} className={className}>
      <img src={svg} alt={alt} />
    </a>
  );
}

function Widget({ name, appStoreUrl, googlePlayUrl }) {
  const appStore = (
    <Badge
      name={name}
      url={appStoreUrl}
      svg={appStoreBadge}
      alt="Download on the App Store"
      className="store-badge-app-store"
    />
  );

  const googlePlay = (
    <Badge
      name={name}
      url={googlePlayUrl}
      svg={googlePlayBadge}
      alt="Get it on Google Play"
      className="store-badge-google-play"
    />
  );

  const badges = [];
  if (
    typeof navigator !== 'undefined' &&
    navigator.userAgent.indexOf('iPhone OS') !== -1
  ) {
    badges.push(appStore);
  } else if (
    typeof navigator !== 'undefined' &&
    navigator.userAgent.indexOf('Android') !== -1
  ) {
    badges.push(googlePlay);
  } else {
    badges.push(appStore);
    badges.push(googlePlay);
  }

  return <div>{badges}</div>;
}

export default Widget;
