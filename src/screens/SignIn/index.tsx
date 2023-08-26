import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {ApplicationScreenProps} from '../../../@types/navigation';
import {Button, Input} from '../../components';
import {useDispatch} from 'react-redux';
import {setSignIn} from '../../redux/slices/authSlice';

const SignInScreen = ({navigation}: ApplicationScreenProps) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = {
      id: 0,
      name: 'Ibnu',
      token: 'abcdefgh',
    };

    dispatch(setSignIn(user));
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="Masukan Email" />
      <Button
        title="Masuk"
        containerStyle={styles.buttonSignIn}
        onPress={handleLogin}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
