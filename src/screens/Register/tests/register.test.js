import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import RegisterScreen from '../index';
describe('RegisterScreen, check if render success', () => {
  afterEach(jest.clearAllMocks);
  jest.useFakeTimers();

  test('render', async () => {
    const {toJSON, unmount} = render(<RegisterScreen />);
    expect(toJSON()).toMatchSnapshot();
    await unmount();
  });
  test('validate input and send to api', async () => {
    const name = 'Franclin Rios';
    const email = 'franclin@gtsba.com';
    const password = '281220';
    const {getByTestId, getByText, debug} = render(<RegisterScreen />);

    expect(getByText('Nome')).toBeDefined();
    expect(getByText('E-mail')).toBeDefined();
    expect(getByText('Senha')).toBeDefined();

    fireEvent.changeText(getByTestId('name'), name);
    fireEvent.changeText(getByTestId('email'), email);
    fireEvent.changeText(getByTestId('password'), password);

    //Check if inputs are populates
    expect(getByTestId('name').props.value).toBe(name);
    expect(getByTestId('email').props.value).toBe(email);
    expect(getByTestId('password').props.value).toBe(password);
    fireEvent.press(getByText('Cadastrar'));
  });
});
