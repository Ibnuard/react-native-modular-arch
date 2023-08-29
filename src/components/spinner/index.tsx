import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors} from '../../styles';

interface ISpinner {
  testID?: string;
}

const Spinner = ({testID}: ISpinner) => {
  return (
    <View testID="spinner-container" style={styles.container}>
      <ActivityIndicator
        testID="activity-indicator"
        color={Colors.COLOR_ACCENT}
      />
    </View>
  );
};

export default Spinner;
