import {Root} from 'native-base';
import {Router, Scene, Stack} from 'react-native-router-flux';
import React from 'react';
import Home from './src/screens/Home';
import Inner from './src/screens/Inner';
import Register from './src/screens/Register';
import Login from './src/screens/Login';

function Routes(props) {
  return (
    <Root>
      <Router>
        <Stack hideNavBar key="root">
          <Scene initial key="inner" hideNavBar component={Inner} />

          <Scene key="home" hideNavBar component={Home} />
          <Scene key="register" hideNavBar component={Register} />
          <Scene key="login" hideNavBar component={Login} />

        </Stack>
      </Router>
    </Root>
  );
}

export default Routes;
