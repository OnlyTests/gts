import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import colors from '../../../styles/colors';
function ButtonCustom({
  background,
  disabled,
  label,
  onPress,
  fontSize,
  width,
  height,
  borderWidth,
  borderRadius,
  marginVertical,
  marginHorizontal,
  labelColor,
  marginLeft,
  loading,
  paddingHorizontal,
}) {
  const btnStyle = {
    container: {
      opacity: disabled ? 0.5 : null,
      flexDirection: 'row',
      backgroundColor: background ? background : colors.primary,
      width: width ? width : '100%',
      height: height ? height : 52,
      borderRadius: borderRadius ? borderRadius : 40,
      borderWidth: borderWidth ? borderWidth : 0.3,
      borderColor: colors.grayDada,
      marginVertical: marginVertical ? marginVertical : 5,
      marginLeft: marginLeft ? marginLeft : 0,
      marginHorizontal: marginHorizontal ? marginHorizontal : 0,
      paddingHorizontal: paddingHorizontal ? paddingHorizontal : 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: labelColor ? labelColor : colors.white,
      paddingVertical: 10,
      fontSize: fontSize ? 14 : fontSize,
      textAlign: 'center',
    },
    ajustCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={btnStyle.container}>
      <View style={btnStyle.ajustCenter}>
        <Text style={btnStyle.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ButtonCustom);
