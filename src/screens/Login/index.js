import {Container} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import ButtonCustom from '../../components/buttons/buttonCustom';
import Header from '../../components/Header';
import {PersonWorld} from '../../assets/svgs/illustration/index';
import {Actions} from 'react-native-router-flux';
import st from './styles';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  function onLogin() {
    if (email == 'bahia@gts.com' && password === '281220') {
      return Actions.home();
    }

    setLoginError('Login ou senha invalidos.');
  }

  return (
    <Container style={st.base}>
      <Header title="Login" />
      <View style={st.viewUllustration}>
        <PersonWorld />
      </View>
      <View style={st.viewSeparator}>
        <OutlinedTextField
          lineWidth={0.5}
          value={email}
          onChangeText={(email) => setEmail(email)}
          label="E-mail's"
          error={loginError && ' '}
          testID={'email'}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <OutlinedTextField
          lineWidth={0.5}
          value={password}
          error={loginError}
          onChangeText={(value) => setPassword(value)}
          label="Senha"
          secureTextEntry
          testID={'password'}
          maxLength={8}
          keyboardType="numeric"
        />
      </View>
      <View style={st.flex} />
      <View style={st.padding}>
        <ButtonCustom onPress={onLogin} label="Entrar" />
      </View>
    </Container>
  );
}

export default Login;
