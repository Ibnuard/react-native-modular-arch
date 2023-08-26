import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_ACCENT,
    paddingVertical: Size.SIZE_12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  // text style
  textTitle: {
    ...Typo.TextSmallRegular,
    color: Colors.COLOR_WHITE,
  },
});
