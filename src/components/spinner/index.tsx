import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors} from '../../styles';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.COLOR_ACCENT} />
    </View>
  );
};

export default Spinner;
