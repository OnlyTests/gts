import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../styles/colors';
import st from './styles';
function Featured({item, index}) {
  const selectedColor = [colors.primaryOpacity, colors.google, colors.green];
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

export default Featured;
