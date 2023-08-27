import {View, TextInputProps, TextInput, ViewStyle} from 'react-native';
import type {PropsWithoutRef} from 'react';
import React from 'react';
import styles from './styles';
import {Colors} from '../../styles';

// input interface
interface IInput extends PropsWithoutRef<TextInputProps> {
  placeholder?: string;
  containerStyle?: ViewStyle;
}

const Input = ({placeholder, containerStyle, ...rest}: IInput) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...rest}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={Colors.COLOR_GRAY_DARK}
      />
    </View>
  );
};

export default Input;
