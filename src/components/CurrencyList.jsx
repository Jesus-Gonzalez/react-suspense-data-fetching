import React from 'react';

import { CurrencyService } from '../services';

import withCache from './withCache';

const CurrencyList = withCache((props) => {
  const { cache } = props;

  // const [base, setBase] = useState('EUR');

  // useEffect(() => {
  //   CurrencyService.get({ base });
  // }, [base]);

  // const handleBaseChange = (event) => {
  //   setBase(event.target.value);
  // };

  // eslint-disable-next-line no-debugger
  debugger;
  const service = CurrencyService.currency.read(cache);

  return (
    <>
      <form>
        <span>base</span>
        <select>
          {Object.keys(service.rates).map((currency) => (
            <option value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </form>
      {Object.entries(service.rates).map(([key, value]) => (
        <h2>
          <span>Currency:</span>
          <span>{key}</span>
          <span>Value:</span>
          <span>{value}</span>
        </h2>
      ))}
    </>
  );
});

export default CurrencyList;
