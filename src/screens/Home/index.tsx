import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationScreenProps} from '../../../@types/navigation';
import styles from './styles';

const HomeScreen = ({navigation}: ApplicationScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
