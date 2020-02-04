import { useState, useEffect } from 'react';
import { getRecord } from '../services/discogsApi';

export const useTitles = () => {
  const [record, setRecord] = useState({});

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
  return { record, fetchRecord };
};
