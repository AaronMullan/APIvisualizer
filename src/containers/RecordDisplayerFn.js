import React, { useState, useEffect } from 'react';
import Records from '../components/Records';
import { discogsApi } from '../services';

const RecordDisplayerFn = () => {
  const [record, setRecord] = useState([]);

  generateid = () => {
    return Math.floor(Math.random() * 2700000);
  }
  fetchRecord = () => {
    const randomid = this.generateid();
    return getRecord(randomid)
      .then(res => console.log(res))
      .then(records => this.setState({ records }));
  }
  return (
    <>
      <button onclick= >Get it</button>
    </>
  );

};

export default RecordDisplayerFn;
