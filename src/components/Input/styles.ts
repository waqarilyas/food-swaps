import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: THEME.PADDING.INPUT_PADDING_BOTTOM,
    marginTop: THEME.MARGIN.INPUT_TOP_MARGIN,
  },
  input: {
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    marginTop: THEME.MARGIN.INPUT_INNER_TOP_MARGIN,

    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 0.1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
