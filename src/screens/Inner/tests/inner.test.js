import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Inner from '../index';

describe('Inner, check if render success', () => {
  afterEach(jest.clearAllMocks);
  jest.useFakeTimers();

  test('render', async () => {
    const {toJSON, unmount} = render(<Inner />);
    expect(toJSON()).toMatchSnapshot();
    await unmount();
  });

  test('check if login buttons are works', async () => {
    const {unmount, getByText} = render(<Inner />);
    //check if have texts
    expect(getByText('GTS Cursos & desafios')).toBeDefined();
    expect(getByText('Cadastro')).toBeDefined();
    expect(getByText('Login')).toBeDefined();
    fireEvent.press(getByText('Login'));
    await unmount();
  });
  test('check if register buttons are works', async () => {
    const {unmount, getByText} = render(<Inner />);
    fireEvent.press(getByText('Cadastro'));
    await unmount();
  });
});
