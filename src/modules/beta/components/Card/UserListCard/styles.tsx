import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../../../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_8,
    borderRadius: 8,
    marginVertical: 4,
  },

  // text style
  textName: {
    ...Typo.TextNormalBold,
  },

  textEmail: {
    ...Typo.TextSmallRegular,
    color: Colors.COLOR_GRAY_DARK,
  },
});
