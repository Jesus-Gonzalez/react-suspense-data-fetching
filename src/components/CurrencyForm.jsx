/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { PropTypes } from 'prop-types';

const CurrencyForm = (props) => {
  const { handleChangeBase, rates } = props;

  return (
    <form>
      <label htmlFor="base">Base Currency</label>
      <select id="base" onChange={handleChangeBase}>
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
