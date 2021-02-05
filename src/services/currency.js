import { createResource } from 'simple-cache-provider';

const delay = (timeout) => new Promise((resolve) => {
  setTimeout(resolve, timeout);
});

const currency = createResource(async () => {
  const url = new URL('https://api.exchangeratesapi.io/latest');

  // if (symbols) {
  //   url.searchParams.set('symbols', symbols.join(','));
  // }

  // if (base) {
  //   url.searchParams.set('base', base);
  // }

  await delay(2500);

  return fetch(url)
    .then((response) => response.json());
});

export default {
  currency,
};
