import Axios from 'axios';
import {Container} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import ButtonCustom from '../../components/buttons/buttonCustom';
import Header from '../../components/Header';
import colors from '../../styles/colors';
import st from './styles';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit() {
    const model = {
      name,
      email,
      password,
    };
    Axios.post('www.minhaapi.com.br/register', model);
  }
  return (
    <Container style={st.base}>
      <Header title="Cadastro" />

      <View style={st.horizontal}>
        <OutlinedTextField
          lineWidth={0.5}
          value={name}
          onChangeText={(name) => setName(name)}
          label="Nome"
          autoCapitalize="none"
          keyboardType="default"
          testID={'name'}
        />

        <OutlinedTextField
          lineWidth={0.5}
          value={email}
          onChangeText={(email) => setEmail(email)}
          label="E-mail"
          errorColor={colors.red}
          autoCapitalize="none"
          testID={'email'}
          keyboardType="email-address"
        />

        <OutlinedTextField
          lineWidth={0.5}
          value={password}
          onChangeText={(value) => setPassword(value)}
          label="Senha"
          secureTextEntry
          maxLength={8}
          testID={'password'}
          keyboardType="numeric"
        />
      </View>
      <View style={st.flex} />
      <View style={st.padding}>
        <ButtonCustom onPress={onSubmit} label="Cadastrar" />
      </View>
    </Container>
  );
}

export default Register;
