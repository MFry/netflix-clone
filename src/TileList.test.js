import React from 'react';
import { shallow, mount } from 'enzyme';
import { createWaitForElement } from 'enzyme-wait';

import TileList from './TileList';
import Tile from './Tile';
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
  it('Sets up the initial carousel correctly', () => {
    const correctFlexOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0];
    jest.mock('./api/__mocks__/axios');
    const waitForSample = createWaitForElement(Carousel);
    expect.hasAssertions();
    const wrapper = mount(<TileList />);
    return waitForSample(wrapper).then((wrapper) => {
      const initialCarousel = wrapper.find(Tile);
      const initialCarouselStyles = initialCarousel.nodes.map(node => node.props.style);
      expect(initialCarouselStyles.lenght).toEqual(correctFlexOrder.lenght);
      expect(
        initialCarouselStyles.reduce((accumulator, style) => Object.keys(style).length === 1, true),
      ).toBeTruthy();
      for (let i = 0; i < initialCarouselStyles.length; ++i) {
        const curStyle = initialCarouselStyles[i].order;
        const correctStyle = correctFlexOrder[i];
        expect(curStyle).toEqual(correctStyle);
      }
      return expect(wrapper.state().movies.length).toBe(20);
    });
  });
  it('First call of shiftRight Correctly updates the carousel', () => {
    const correctOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    jest.mock('./api/__mocks__/axios');
    const waitForSample = createWaitForElement(Carousel);
    expect.hasAssertions();
    const wrapper = mount(<TileList />);
    return waitForSample(wrapper).then((wrapper) => {
      wrapper.instance().shiftRight();
      const moviesAfterRotation = wrapper.find(Tile);
      expect(moviesAfterRotation.length).toEqual(correctOrder.length);
      const afterRotationStyle = moviesAfterRotation.nodes.map(node => node.props.style);
      // Ensure the style object structure hasn't changed
      expect(
        afterRotationStyle.reduce((accumulator, style) => Object.keys(style).length === 1, true),
      ).toBeTruthy();
      // Ensure the carousel rotated correctly
      for (let i = 0; i < afterRotationStyle.length; ++i) {
        const curStyle = afterRotationStyle[i].order;
        const correctStyle = correctOrder[i];
        expect(curStyle).toEqual(correctStyle);
      }
      return expect(wrapper.state().movies.length).toBe(20);
      // return expect(moviesAfter).toMatchSnapshot();
    });
  });
});
