import { useState, useEffect } from 'react';
import { getRecord } from '../services/discogsApi';

export const useTitles = (numberOfTitles) => {
  const [records, setRecords] = useState([]);

  const generateid = () => {
    return Math.floor(Math.random() * 2700000);
  };
  const fetchRecords = () => {
    for(let i = 0; i < numberOfTitles; i++) {
      const randomid = generateid();
      getRecord(randomid)
        .then(record => record)
        .then(record => {
          setRecords((previousRecords) => [...previousRecords, record]);
        });
    }
  };
  
  useEffect(() => {
    fetchRecords();
  }, []);

  return { records, fetchRecords };
};
