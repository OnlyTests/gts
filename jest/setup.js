import {NativeModules} from 'react-native';

NativeModules.NativeFunctions = {
  userDismissedOnboarding: jest.fn(),
};
jest.autoMockOff();

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity',
);

jest.mock('react-native-router-flux', () => ({
  Actions: {
    replace: jest.fn(),
    push: jest.fn(),
    login: jest.fn(),
    register: jest.fn(),
  },
}));

jest.mock('react-native/Libraries/LayoutAnimation/LayoutAnimation', () => ({
  ...require.requireActual(
    'react-native/Libraries/LayoutAnimation/LayoutAnimation',
  ),
  configureNext: jest.fn(),
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const {EventEmitter} = require('events');
  return EventEmitter;
});
jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;

  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View: View,
    Extrapolate: {CLAMP: jest.fn()},
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
    Easing: {
      in: jest.fn(),
      out: jest.fn(),
      inOut: jest.fn(),
    },
  };
});
