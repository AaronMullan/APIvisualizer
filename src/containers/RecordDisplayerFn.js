import React, { useState, useEffect } from 'react';
import Record from '../components/Record';
import { getRecord } from '../services/discogsApi';

const RecordDisplayerFn = () => {
  const [record, setRecord] = useState([]);

  const generateid = () => {
    return Math.floor(Math.random() * 2700000);
  };
  const fetchRecord = () => {
    const randomid = generateid();
    return getRecord(randomid)
      .then(record => setRecord(record));
  };
  useEffect(() => {
    fetchRecord();
  }, []);
  return (
    <>
      <button onClick={fetchRecord} >Get it</button>
      <h2>Random Album Title</h2>
      <Record title={record.title} />
    </>
  );

};

export default RecordDisplayerFn;
