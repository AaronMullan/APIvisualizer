import React from 'react';
import PropTypes from 'prop-types';

const Record = ({ title }) => (
  <section>
    <p>{title}</p>
  </section>
);

Record.propTypes = {
  title: PropTypes.string.isRequired 
};

export default Record;
