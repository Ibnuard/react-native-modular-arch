import {Text, View} from 'react-native';
import React from 'react';
import {ApplicationScreenProps} from '../../../../../@types/navigation';
import styles from './styles';

const AlphaProfileDetailScreen = ({navigation}: ApplicationScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AlphaProfileDetail</Text>
    </View>
  );
};

export default AlphaProfileDetailScreen;
