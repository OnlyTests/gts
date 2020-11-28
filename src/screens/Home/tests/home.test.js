import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../index';
import {mock as mockFeatured, mockMore as mockRecommended} from '../mock';
describe('Home, check if render success', () => {
  afterEach(jest.clearAllMocks);
  jest.useFakeTimers();

  test('render', async () => {
    const {toJSON, unmount} = render(<Home />);
    expect(toJSON()).toMatchSnapshot();
    await unmount();
  });

  test('check flatlist', async () => {
    const userName = 'João Paulo';
    const {getByText, getAllByText} = render(<Home />);

    expect(getAllByText(userName)[0]).toBeDefined();

    mockFeatured.forEach((mock) => {
      expect(getByText(mock.title)).toBeDefined();
    });

    mockRecommended.forEach((mock) => {
      expect(getByText(mock.title)).toBeDefined();
    });
  });
});
