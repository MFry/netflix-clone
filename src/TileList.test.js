import React from 'react';
import { shallow, mount } from 'enzyme';
import { createWaitForElement } from 'enzyme-wait';

import TileList from './TileList';
import Carousel from './Carousel';

describe('TileList', () => {
  it('Compiles', () => {
    jest.mock('axios', () => ({ get: jest.fn() }));
    const wrapper = shallow(<TileList />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('Displays movies once the api resolves', () => {
    // axios.get = jest.fn(url => get(url));
    jest.mock('./api/__mocks__/axios');
    const waitForSample = createWaitForElement(Carousel);
    expect.assertions(2);
    const wrapper = mount(<TileList />);
    return waitForSample(wrapper).then((wrapper) => {
      const movies = wrapper.find(Carousel).html();
      expect(wrapper.state().movies.length).toBe(20);
      return expect(movies).toMatchSnapshot();
    });
  });
});
