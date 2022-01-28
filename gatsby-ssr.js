import React from 'react';

import withProviders from './with-providers';

export const wrapRootElement = withProviders;

export const onRenderBody = ({ setHeadComponents }) => {
  // Prevent robots indexation
  const noIndex = (
    <meta name="robots" content="noindex, nofollow, noimageindex" />
  );

  setHeadComponents([noIndex]);
};
