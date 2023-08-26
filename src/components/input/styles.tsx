import {StyleSheet} from 'react-native';
import {Colors, Size, Typo} from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_WHITE,
    paddingHorizontal: Size.SIZE_10,
    borderRadius: 8,
  },

  input: {
    ...(Typo.TextSmallRegular as any),
  },
});
