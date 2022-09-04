import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../theme';
import {Icons} from '../../theme/icons';

interface IIcon extends IconProps {
  name: keyof typeof Icons;
}

const AppIcon = (props: IIcon) => {
  const iconName = Icons[props.name];

  return (
    <Ionicon
      {...props}
      name={iconName}
      size={props.size ? props.size : THEME.FONTS.SIZE.LARGE}
    />
  );
};

export default AppIcon;
