import React from 'react';
import {render} from '@testing-library/react-native';
import RegisterScreen from '../index';
describe('RegisterScreen, check if render success', () => {
  test('render', async () => {
    const {toJSON, unmount} = await render(<RegisterScreen />);
    expect(toJSON()).toMatchSnapshot();
    await unmount();
  });
});
