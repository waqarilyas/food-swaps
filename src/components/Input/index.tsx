import React, {FC, useState} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {THEME} from '../../theme';
import {Icons} from '../../theme/icons';
import AppIcon from '../Icon';
import AppText from '../Text';
import styles from './styles';

interface IAppInput extends TextInputProps {
  label?: string;
  validated?: boolean;
  rightIcon?: keyof typeof Icons;
}

const AppInput: FC<IAppInput> = props => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <View
        style={{
          ...styles.container,
          borderColor: focused ? THEME.COLORS.primary : THEME.COLORS.text_grey,
        }}>
        {props.label && <AppText variant="label">{props.label}</AppText>}
        <View style={styles.innerContainer}>
          <TextInput
            {...props}
            onFocus={() => setFocused(true)}
            onEndEditing={(e: any) => {
              setFocused(false);
              props.onEndEditing && props.onEndEditing(e);
            }}
            style={[styles.input, props.style]}
          />
          <View style={styles.iconContainer}>
            {props.rightIcon ? (
              <AppIcon name={props.rightIcon} color={THEME.COLORS.black} />
            ) : props.validated ? (
              <AppIcon name="check" color={THEME.COLORS.primary} />
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
};

export default AppInput;
