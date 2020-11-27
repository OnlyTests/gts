import {Container} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {PersonSuporte} from '../../assets/svgs/illustration';
import ButtonCustom from '../../components/buttons/buttonCustom';
import colors from '../../styles/colors';
import st from './styles';
function Inner() {
  
  function goToLogin() {
    Actions.login();
  }

  function goToRegister() {
    Actions.register();
  }
  return (
    <Container style={st.root}>
      <View style={st.align}>
        <Text style={st.titleTxt}>GTS Cursos & desafios</Text>
        <View style={st.illustration}>
          <PersonSuporte />
        </View>
      </View>
      <View style={st.flex} />
      <ButtonCustom onPress={goToLogin} label="Login" />
      <ButtonCustom
        background="transparent"
        labelColor={colors.primary}
        borderWidth={2}
        onPress={goToRegister}
        label="Cadastro"
      />
    </Container>
  );
}

export default Inner;
