import React, { Suspense } from 'react';

import { CurrencyList } from './components';

function App() {
  return (
    <Suspense
      fallback={<h1>Loading currencies...</h1>}
    >
      <CurrencyList />
    </Suspense>
  );
}

export default App;
