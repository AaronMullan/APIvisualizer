import React, { useState } from 'react';
import Records from '../components/Records';
import { useTitles } from '../hooks/titles';

const RecordDisplayerFn = () => {
  const [numberOfTitles, setNumberofTitles] = useState('1');
  const { records, fetchRecords } = useTitles(numberOfTitles);

  return (
    <>
      <input type="text" value={numberOfTitles} onChange={({ target }) => setNumberofTitles(target.value)}></input>
      <button onClick={fetchRecords} >Get Random Titles</button>
      <h2>Random Album Titles</h2>
      <Records records={records} />
    </>
  );
};

export default RecordDisplayerFn;
