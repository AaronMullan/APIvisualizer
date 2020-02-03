import React from 'react';
import PropTypes from 'prop-types';

const Record = ({ artist, title }) => (
  <section>
    <h2>{artist}</h2>
    <p>{title}</p>
  </section>
);

Record.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired 
};

export default Record;
