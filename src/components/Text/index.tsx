import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {THEME} from '../../theme';
import {RF} from '../../theme/responsive';

interface IAppText extends TextProps {
  variant?: 'normal' | 'heading-small' | 'heading-large' | 'label' | 'desc';
  isUnselected?: boolean;
}

const AppText: FC<IAppText> = props => {
  let isUnselected = props.isUnselected;

  let fontFamily = THEME.FONTS.TYPE.REGULAR,
    fontSize = THEME.FONTS.SIZE.XXSMALL,
    color = THEME.COLORS.black;

  switch (props.variant) {
    case 'label':
      fontFamily = THEME.FONTS.TYPE.MEDIUM;
      fontSize = THEME.FONTS.SIZE.XXXSMALL;
      // color = THEME.COLORS.text_grey;
      break;
    case 'heading-large':
      fontFamily = THEME.FONTS.TYPE.BOLD;
      fontSize = THEME.FONTS.SIZE.XLARGE;

      break;
    case 'heading-small':
      fontFamily = THEME.FONTS.TYPE.BOLD;
      fontSize = THEME.FONTS.SIZE.XSMALL;
      break;
    case 'desc':
      fontFamily = THEME.FONTS.TYPE.REGULAR;
      fontSize = THEME.FONTS.SIZE.XXSMALL;
      color = THEME.COLORS.text_grey;
      break;
  }

  return (
    <Text
      {...props}
      style={[
        {
          fontSize,
          fontFamily,
          letterSpacing: -0.2,
          color,
          opacity: isUnselected ? 0.6 : 1,
        },
        props.style,
      ]}
    />
  );
};

export default AppText;
