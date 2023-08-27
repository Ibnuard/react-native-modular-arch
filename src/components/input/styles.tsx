import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_WHITE,
    paddingHorizontal: Size.SIZE_10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.COLOR_GRAY_DARK,
  },

  input: {
    ...(Typo.TextSmallRegular as any),
  },
});
