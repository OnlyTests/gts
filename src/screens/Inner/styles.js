import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  root: {
    backgroundColor: colors.base,
    paddingHorizontal: 16,
  },
  flex: {flex: 1},

  align: {
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: 24,
    paddingTop: 10,
    fontWeight: 'bold',
    color: colors.primary,
  },
  illustration: {
    width: '70%',
    height: '70%',
  },
});
