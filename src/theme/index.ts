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
      XXXSMALL: RF(11),
      XXXXSMALL: RF(10),
    },
    TYPE: {
      LIGHT: 'Montserrat-Light',
      REGULAR: 'Montserrat-Regular',
      MEDIUM: 'Montserrat-Medium',
      SEMIBOLD: 'Montserrat-SemiBold',
      BOLD: 'Montserrat-Bold',
      TOKENS:
        Platform.OS == 'ios'
          ? 'TokenSymbols-Regular'
          : 'FONT-TokenSymbols-Regular',
    },
  },
  MARGIN: {
    CARD_LISTING: RF(4),
  },
  PADDING: {
    CARD_PADDING: RF(4),
  },
};

export {THEME};
