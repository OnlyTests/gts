import {Container} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import ButtonCustom from '../../components/buttons/buttonCustom';
import Header from '../../components/Header';
import colors from '../../styles/colors';
import {PersonWorld} from '../../assets/svgs/illustration/index';
import {Actions} from 'react-native-router-flux';
function Login() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function goToHome() {
    Actions.home();
  }
  return (
    <Container style={{backgroundColor: colors.base}}>
      <Header title="Login" />
      <View style={{width: '70%', height: '30%', alignSelf: 'center'}}>
        <PersonWorld />
      </View>
      <View style={{paddingHorizontal: 16, paddingTop: 20}}>
        <OutlinedTextField
          lineWidth={0.5}
          value={email}
          onChangeText={(email) => setEmail(email)}
          label="E-mail"
          errorColor={colors.red}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <OutlinedTextField
          lineWidth={0.5}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          label="Senha"
          secureTextEntry
          maxLength={8}
          keyboardType="numeric"
        />
      </View>
      <View style={{flex: 1}} />
      <View style={{padding: 16}}>
        <ButtonCustom onPress={goToHome} label="Entrar" />
      </View>
    </Container>
  );
}

export default Login;
