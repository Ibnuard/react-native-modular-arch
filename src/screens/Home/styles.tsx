import {StyleSheet} from 'react-native';
import {Colors, Mixins, Size, Typo} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
    padding: Size.SIZE_14,
  },

  moduleIcon: {
    width: Size.SIZE_24 + 8,
    height: Size.SIZE_24 + 8,
    marginBottom: Size.SIZE_8,
  },

  moduleButtonContainer: {
    width: Mixins.scaleSize(64),
    height: Mixins.scaleSize(72),
    padding: Size.SIZE_8,
    alignItems: 'center',
  },

  // text style

  textModule: {
    ...Typo.TextSmallRegular,
    textAlign: 'center',
  },
});
