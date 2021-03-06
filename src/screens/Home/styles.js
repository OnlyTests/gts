import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
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
  helloTxt: {
    fontWeight: '700',
    color: colors.black,
  },
  nameTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
  },
  ownerTxt: {
    fontWeight: '400',
    color: colors.white,
    fontSize: 10,
  },
  paddingHorizontal: {paddingHorizontal: 16},
  padding: {
    padding: 16,
  },
});
