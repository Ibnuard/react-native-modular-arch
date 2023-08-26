import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {PropsWithoutRef} from 'react';
import styles from './styles';

interface IButton extends PropsWithoutRef<TouchableOpacityProps> {
  title: string;
  containerStyle?: ViewStyle;
}

const Button = ({title, containerStyle, ...rest}: IButton) => {
  return (
    <TouchableOpacity {...rest} style={[styles.container, containerStyle]}>
      <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
