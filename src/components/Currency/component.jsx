import React from 'react';
import { PropTypes } from 'prop-types';

import './styles.css';

const Currency = (props) => {
  const { currency, value } = props;

  return (
    <div className="entry">
      <div className="currency">
        <strong>{currency}</strong>
      </div>

      <div className="value">
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
