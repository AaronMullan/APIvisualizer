import React from 'react';
import PropTypes from 'prop-types';
import Record from './Record';

const Records = ({ records }) => {
  const recordElements = records.map(({ title }) => (
    <li key={title}>
      <Record title={title} />
    </li>
  ));
  
  return (
    <ul>
      {recordElements}
    </ul>
  );
};

Records.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }))
};
export default Records;
