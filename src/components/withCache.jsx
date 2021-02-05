/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SimpleCache } from 'simple-cache-provider';

export default (Component) => (props) => (
  <SimpleCache.Consumer>
    {(cache) => <Component {...props} cache={cache} />}
  </SimpleCache.Consumer>
);
