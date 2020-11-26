import {Right, Header as HeaderBar, Left, Body, Icon} from 'native-base';

import React from 'react';
import {Platform, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import colors from '../../styles/colors';
function Header(props) {
  const styleRightText = {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.white,
  };

  const styleHeader =
    Platform.OS == 'ios'
      ? {
          backgroundColor: props.backgroundColor,
          justifyContent: 'flex-start',
          paddingTop: 0,
          height: 45,
          elevation: 0,
        }
      : {
          backgroundColor: props.backgroundColor,
          justifyContent: 'flex-start',
          height: 70,
          elevation: 0,
        };

  return (
    <HeaderBar style={styleHeader}>
      <Left>
        {!props.noBack && (
          <TouchableOpacity
            onPress={() => (props.onPress ? props.onPress() : Actions.pop())}>
            <Icon name="arrow-back" style={{color: colors.arrowBack}} />
          </TouchableOpacity>
        )}
      </Left>
      <Body style={{flex: 3}}>
        <Text
          ellipsizeMode={'middle'}
          style={{
            fontSize: 18,
            fontWeight: '600',
            letterSpacing: -0.77,
            color: colors.txtDefault,
          }}
          numberOfLines={1}>
          {props.title}
        </Text>
      </Body>
      <Right>
        <TouchableOpacity onPress={props.rightOnPress}>
          <Text ellipsizeMode={'clip'} style={styleRightText}>
            {props.rightText}
          </Text>
        </TouchableOpacity>
      </Right>
    </HeaderBar>
  );
}

export default React.memo(Header);
