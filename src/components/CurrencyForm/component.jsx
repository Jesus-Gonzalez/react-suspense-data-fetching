import React from 'react';
import { PropTypes } from 'prop-types';

import './styles.css';

const CurrencyForm = (props) => {
  const { handleChangeBase, rates } = props;

  return (
    <form className="wrapper">
      <strong className="label">Base Currency</strong>
      <select onChange={handleChangeBase}>
        <option>
          Select
        </option>

        {Object.keys(rates).map((currency) => (
          <option
            key={currency}
            value={currency}
          >
            {currency}
          </option>
        ))}
      </select>
    </form>
  );
};

CurrencyForm.propTypes = {
  handleChangeBase: PropTypes.func.isRequired,
  rates: PropTypes.object.isRequired,
};

export default CurrencyForm;
