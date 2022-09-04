import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {THEME} from '../../theme';
import {Icons} from '../../theme/icons';
import AppIcon from '../Icon';
import AppText from '../Text';

interface ISocialButton extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  rightIcon?: keyof typeof Icons;
  leftIcon?: keyof typeof Icons;
  title: string;
  isForward?: boolean;
}

const PrimaryButton: FC<ISocialButton> = props => {
  let color: string;

  let variant = props.variant ? props.variant : 'primary';

  switch (variant) {
    case 'primary':
      color = THEME.COLORS.primary;
      break;

    case 'secondary':
      color = THEME.COLORS.secondary;
      break;
  }

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: color}]}>
      <View style={styles.leftIconContainer}>
        {props.leftIcon && (
          <AppIcon name={props.leftIcon} color={THEME.COLORS.white} />
        )}
      </View>

      <AppText variant="heading-small" style={styles.title}>
        {props.title}
      </AppText>

      <View style={styles.rightIconContainer}>
        {props.rightIcon ? (
          <AppIcon name={props.rightIcon} color={THEME.COLORS.white} />
        ) : props.isForward ? (
          <AppIcon name={'arrow_forward'} color={THEME.COLORS.white} />
        ) : null}
      </View>
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
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {},
  leftIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default PrimaryButton;
