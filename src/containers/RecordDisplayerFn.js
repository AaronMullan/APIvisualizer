import React from 'react';
import Record from '../components/Record';
import { useTitles } from '../hooks/titles';

const RecordDisplayerFn = () => {
  const { record, fetchRecord } = useTitles();
  
  return (
    <>
      <input type="text" ></input>
      <button onClick={fetchRecord} >Get it</button>
      <h2>Random Album Title</h2>
      <Record title={record.title} />
    </>
  );

};

export default RecordDisplayerFn;
