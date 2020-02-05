import React from 'react';
import { shallow } from 'enzyme';
import RecordDisplayer from './RecordDisplayer';

jest.mock('../services/discogsApi.js');

describe('RecordDisplayer container', () => {
  it('can get a new record title', () => {
    const wrapper = shallow(<RecordDisplayer />);
    const thisRecord = wrapper.instance();

    return thisRecord.fetchRecord()
      .then(() => {
        expect(wrapper.state('title')).toEqual('placeholder');

      });
  });
});
