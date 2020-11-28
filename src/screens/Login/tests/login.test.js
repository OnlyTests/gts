import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Login from '../index';

describe('Login, check if render success', () => {
  afterEach(jest.clearAllMocks);
  jest.useFakeTimers();

  test('render', async () => {
    const {toJSON, unmount} = render(<Login />);
    expect(toJSON()).toMatchSnapshot();
    await unmount();
  });

  test('validate input and send to api', async () => {
    const email = 'fulano@gtsba.com';
    const password = '281220';

    const {getByTestId, getByText, update, debug} = render(<Login />);

    expect(getByText('E-mail')).toBeDefined();
    expect(getByText('Senha')).toBeDefined();

    //check if exist login and password
    fireEvent.changeText(getByTestId('email'), email);
    fireEvent.changeText(getByTestId('password'), password);
    fireEvent.press(getByText('Entrar'), 'pressIn');
    
    expect(getByTestId('email').props.value).toBe(email);
    expect(getByTestId('password').props.value).toBe(password);

  });
});
