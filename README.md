# react-store-badge

[![npm version](https://img.shields.io/npm/v/react-store-badge)](https://www.npmjs.com/package/react-store-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-store-badge)](https://www.npmjs.com/package/react-store-badge)
[![License](https://img.shields.io/github/license/apuyou/react-store-badge)](https://github.com/apuyou/react-store-badge/blob/master/LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/react-store-badge)](https://www.npmjs.com/package/react-store-badge)

## Introduction

A React component to display App Store and/or Google Play badges based on the browser.

If the browser is an iPhone or iPad, only the App Store badge will be displayed. If the browser is running on Android, only the Google Play badge will be displayed. In all other cases, both badges are shown.

## Instalation

```bash
$ npm i react-store-badge
```

If you are using Yarn:

```bash
$ yarn add react-store-badge
```

## Usage

```javascript
import React from 'react';
import StoreBadge from 'react-store-badge';

function Page() {
  return (
    <div>
      <p>Download Cheerswipe!</p>
      <StoreBadge
        name="Cheerswipe"
        googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
        appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
      />
    </div>
  );
}

export default Page;
```

## Usage without React

If you are not using react, you should have a look at [store-badge](https://apuyou.github.io/store-badge/)!

## Legal

_Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc._

_Google Play and the Google Play logo are trademarks of Google LLC._
