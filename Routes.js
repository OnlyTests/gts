import {Root} from 'native-base';
import {Router, Scene, Stack} from 'react-native-router-flux';
import React from 'react';
import Home from './src/screens/Home';
import Inner from './src/screens/Inner';
import Register from './src/screens/Register';

function Routes(props) {
  return (
    <Root>
      <Router>
        <Stack hideNavBar key="root">

          <Scene key="inner" hideNavBar component={Inner} />

          <Scene key="home" hideNavBar component={Home} />
          <Scene initial key="register" hideNavBar component={Register} />

          {/* <Scene key="inner" hideNavBar component={Inner} />
          <Scene key="login" hideNavBar component={Login} />
          <Scene key="chat" hideNavBar component={Chat} /> */}
        </Stack>
      </Router>
    </Root>
  );
}

export default Routes;
