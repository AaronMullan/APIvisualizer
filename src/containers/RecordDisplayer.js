import React, { Component } from 'react';
import Record from '../components/Record';
import { getRecord } from '../services/discogsApi';

export default class RecordDisplayer extends Component {
  state = {
    artist: 'Place Holder',
    title: 'placeholder',
    record: {}
  }
  generateid = () => {
    return Math.floor(Math.random() * 2700000);
  }

  fetchRecord = () => {
    const randomid = this.generateid();
    return getRecord(randomid)
      .then(record => this.setState({ record }));
  }
  componentDidMount() {
    this.fetchRecord();
  }

  render() {
    return (
      <>
        <button onClick={this.fetchRecord}>Fetch</button>
        <h2>Record</h2>
        <Record title={this.state.record.title} />
      </>
    );
  }
}
