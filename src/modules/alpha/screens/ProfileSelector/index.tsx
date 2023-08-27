import {Text, View} from 'react-native';
import React from 'react';
import {ApplicationScreenProps} from '../../../../../@types/navigation';
import styles from './styles';

const AlphaProfileSelectorScreen = ({navigation}: ApplicationScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AlphaProfileSelectorScreen</Text>
    </View>
  );
};

export default AlphaProfileSelectorScreen;
