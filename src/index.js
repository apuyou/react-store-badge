import React from 'react';

import appStoreBadge from './appstore.svg';
import googlePlayBadge from './googleplay.svg';

function Badge({ name, url, svg, alt, className, ...rest }) {
  return (
    <a href={url} title={name} className={className} {...rest}>
      <img src={svg} alt={alt} />
    </a>
  );
}

function Widget({ name, appStoreUrl, googlePlayUrl, ...rest }) {
  const appStore = appStoreUrl && (
    <Badge
      key="appstore"
      name={name}
      url={appStoreUrl}
      svg={appStoreBadge}
      alt="Download on the App Store"
      className="store-badge-app-store"
      {...rest}
    />
  );

  const googlePlay = googlePlayUrl && (
    <Badge
      key="googleplay"
      name={name}
      url={googlePlayUrl}
      svg={googlePlayBadge}
      alt="Get it on Google Play"
      className="store-badge-google-play"
      {...rest}
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
