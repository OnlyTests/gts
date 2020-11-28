import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
export default StyleSheet.create({
  root: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  image: {
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  titleTxt: {
    color: colors.white,
    fontSize: 12,
  },
  ownerTxt: {
    fontWeight: '400',
    color: colors.white,
    fontSize: 10,
  },
  padding: {
    padding: 5,
  },
});
