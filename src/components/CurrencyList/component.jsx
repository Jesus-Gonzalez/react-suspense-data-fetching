import React, { useState } from 'react';

import { CurrencyService } from '../../services';

import { Currency, CurrencyForm, withCache } from '../__components';

import './styles.css';

const CurrencyList = withCache((props) => {
  const { cache } = props;

  const [base, setBase] = useState('EUR');

  const handleChangeBase = (event) => {
    setBase(event.target.value);
  };

  const service = CurrencyService.currency.read(cache, base);

  return (
    <div className="page-wrapper">
      <h1>Exchange Rates</h1>
      <CurrencyForm
        handleChangeBase={handleChangeBase}
        rates={service.rates}
      />
      <h2>
        Base:
        {' '}
        {base}
      </h2>
      <div className="currency-list">
        {Object.entries(service.rates).map(([key, value]) => (
          <Currency
            key={key}
            currency={key}
            value={value}
          />
        ))}
      </div>
    </div>
  );
});

export default CurrencyList;
