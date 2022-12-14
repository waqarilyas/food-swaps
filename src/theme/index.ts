import {Platform} from 'react-native';
import {colors} from './colors';
import {Icons} from './icons';
import {RF} from './responsive';

const THEME = {
  COLORS: colors,
  ICONS: Icons,
  FONTS: {
    SIZE: {
      XXXXLARGE: RF(26),
      XXXLARGE: RF(24),
      XXLARGE: RF(22),
      XLARGE: RF(20),
      LARGE: RF(18),
      MEDIUM: RF(16),
      SMALL: RF(14),
      XSMALL: RF(13),
      XXSMALL: RF(12),
      XXXSMALL: RF(11.2),
      XXXXSMALL: RF(10),
    },
    TYPE: {
      LIGHT: 'Nunito-Light',
      EXTRA_LIGHT: 'Nunito-ExtraLight',
      REGULAR: 'Nunito-Regular',
      MEDIUM: 'Nunito-Medium',
      SEMIBOLD: 'Nunito-SemiBold',
      BOLD: 'Nunito-Bold',
    },
  },
  MARGIN: {
    CARD_LISTING: RF(4),
    INPUT_INNER_TOP_MARGIN: RF(5),
    INPUT_TOP_MARGIN: RF(10),
    SOCIAL_TOP: RF(10),
  },
  PADDING: {
    CARD_PADDING: RF(4),
    INPUT_PADDING_BOTTOM: RF(5),
    BUTTON_INNER: RF(11),
  },
  RADIUS: {
    BUTTON: RF(10),
  },
};

export {THEME};
