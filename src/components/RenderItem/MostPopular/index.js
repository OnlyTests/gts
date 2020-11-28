import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../styles/colors';
import st from './styles';
function MostPopular({item, index}) {
  const selectedColor = [
    colors.green,
    colors.google,
    colors.primaryOpacity,
    colors.orange,
  ];
  return (
    <View style={[st.root, {backgroundColor: selectedColor[index]}]}>
      <ImageBackground
        source={{
          uri: item.image,
        }}
        resizeMode="contain"
        style={st.image}>
        <View style={st.padding}>
          <Text style={st.titleTxt}>{item.title}</Text>

          <Text style={st.ownerTxt}>{item.owner}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default MostPopular;
