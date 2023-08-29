import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {ApplicationScreenProps} from '../../../../../@types/navigation';
import {fetchAPI} from '../../../../api/apiService';
import {USER_GET_ALL} from '../../../../api/api';
import {API_METHOD} from '../../../../constants';
import {useFocusEffect} from '@react-navigation/native';

const BetaUserListScreen = ({navigtaion}: ApplicationScreenProps) => {
  // fetch api on screen focused || on navigation load
  useFocusEffect(
    React.useCallback(() => {
      getAllUser();

      return;
    }, []),
  );

  // Get all user
  const getAllUser = async () => {
    const {state, data, error} = await fetchAPI(USER_GET_ALL, API_METHOD.GET);
  };

  return (
    <View style={styles.container}>
      <Text>BetaUserListScreen</Text>
    </View>
  );
};

export default BetaUserListScreen;
