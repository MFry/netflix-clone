import React from 'react';
import { shallow, mount } from 'enzyme';

import TileList from './TileList';

describe('TileList', () => {
  it('Compiles', () => {
    jest.mock('axios', () => ({ get: jest.fn() }));
    const wrapper = shallow(<TileList />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('Gets movies', () => {
    jest.mock('axios', () => {
      const { get } = require('./__mocks__/axios');
      return {
        get: url => get(url),
      };
    });
    q;
    // axios.get = jest.fn(url => get(url));
    const mounted = mount(<tileList />);
  });
});
