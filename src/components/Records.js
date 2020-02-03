import React from 'react';
import PropTypes, { string } from 'prop-types';
import Record from './Record';

const Records = ({ records }) => {
  const recordElements = records.map(({ artist, title }) =>(
    <li key={string.concat(artist, title)}>
      <Record artist={artist} title={title} />
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
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default Records;
