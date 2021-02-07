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
    <>
      <CurrencyForm
        handleChangeBase={handleChangeBase}
        rates={service.rates}
      />
      <div className="currency-list">
        {Object.entries(service.rates).map(([key, value]) => (
          <Currency
            key={key}
            currency={key}
            value={value}
          />
        ))}
      </div>
    </>
  );
});

export default CurrencyList;
