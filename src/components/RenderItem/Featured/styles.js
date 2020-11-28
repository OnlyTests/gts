import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
export default StyleSheet.create({
  root: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  image: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  titleTxt: {
    fontWeight: 'bold',
    color: colors.white,
  },
  ownerTxt: {
    fontWeight: '400',
    color: colors.white,
    fontSize: 10,
  },
  padding: {
    padding: 16,
  },
});
