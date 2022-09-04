import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {THEME} from '../../theme';
import {Icons} from '../../theme/icons';
import AppIcon from '../Icon';
import AppText from '../Text';

interface ISocialButton extends TouchableOpacityProps {
  variant: 'facebook' | 'apple' | 'email';
}

const SocialButton: FC<ISocialButton> = props => {
  let icon: keyof typeof Icons, color: string;

  switch (props.variant) {
    case 'apple':
      icon = 'apple_filled';
      color = THEME.COLORS.black;
      break;

    case 'email':
      icon = 'mail';
      color = THEME.COLORS.primary;
      break;

    case 'facebook':
      icon = 'facebook';
      color = THEME.COLORS.blue;
      break;
  }

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: color}]}>
      <AppIcon name={icon} color={THEME.COLORS.white} />
      <AppText variant="heading-small" style={styles.title}>
        Continue with {props.variant}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: THEME.PADDING.BUTTON_INNER,
    marginTop: THEME.MARGIN.SOCIAL_TOP,
    borderRadius: THEME.RADIUS.BUTTON,

    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    color: THEME.COLORS.white,
    marginLeft: THEME.MARGIN.SOCIAL_TOP,
  },
});

export default SocialButton;
