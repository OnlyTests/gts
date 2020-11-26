import {Container} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import ButtonCustom from '../../components/buttons/buttonCustom';
import Header from '../../components/Header';
import colors from '../../styles/colors';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container style={{backgroundColor: colors.base}}>
      <Header title="Cadastro" />

      <View style={{paddingHorizontal: 16}}>
        <OutlinedTextField
          lineWidth={0.5}
          value={name}
          onChangeText={(name) => setName(name)}
          label="Nome"
          autoCapitalize="none"
          keyboardType="default"
        />

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
          label="Telefone"
          keyboardType="phone-pad"
        />
      </View>
      <View style={{flex: 1}} />
      <View style={{padding: 16}}>
        <ButtonCustom label="Cadastrar" />
      </View>
    </Container>
  );
}

export default Register;
