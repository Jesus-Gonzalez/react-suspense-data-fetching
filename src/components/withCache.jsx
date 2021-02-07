/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SimpleCache } from 'simple-cache-provider';

export default (Component) => (props) => (
  <SimpleCache.Consumer>
    {(cache) => <Component cache={cache} {...props} />}
  </SimpleCache.Consumer>
);
