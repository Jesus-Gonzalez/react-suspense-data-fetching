import React from 'react';
import { PropTypes } from 'prop-types';

const Currency = (props) => {
  const { currency, value } = props;

  return (
    <div className="entry">
      <div className="currency">
        <span>Currency:</span>
        <span>{currency}</span>
      </div>

      <div className="value">
        <span>Value:</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Currency;
