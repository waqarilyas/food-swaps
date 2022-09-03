import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';

interface IAppInput extends TextInputProps {}

const AppInput: FC<IAppInput> = props => {
  return <TextInput {...props} style={styles.container} />;
};

export default AppInput;
