import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  base: {
    backgroundColor: colors.base,
  },
  viewUllustration: {
    width: '70%',
    height: '30%',
    alignSelf: 'center',
  },
  viewSeparator: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  flex: {flex: 1},

  horizontal: {
    paddingHorizontal: 16,
  },
  padding: {
    padding: 16,
  },
});
