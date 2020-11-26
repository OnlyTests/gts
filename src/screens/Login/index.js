import {Container} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import {PersonSuporte} from '../../assets/svgs/illustration';
import ButtonCustom from '../../components/buttons/buttonCustom';
import colors from '../../styles/colors';
function Home() {
  return (
    <Container style={{backgroundColor: colors.base, paddingHorizontal: 16}}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 24,
            paddingTop: 10,
            fontWeight: 'bold',
            color: colors.primary,
          }}>
          GTS Cursos & desafios
        </Text>
        <View style={{width: '70%', height: '70%'}}>
          <PersonSuporte />
        </View>
      </View>
      <View style={{flex: 1}} />
      <ButtonCustom label="Login" />
      <ButtonCustom
        background={colors.grayLight}
        labelColor={colors.primary}
        label="Cadastro"
      />
    </Container>
  );
}

export default Home;
