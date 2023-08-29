import {FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {ApplicationScreenProps} from '../../../../../@types/navigation';
import {fetchAPI} from '../../../../api/apiService';
import {USER_GET_ALL} from '../../../../api/api';
import {API_METHOD, API_STATES} from '../../../../constants';
import {useFocusEffect} from '@react-navigation/native';
import {Card} from '../../components';

const BetaUserListScreen = ({navigtaion}: ApplicationScreenProps) => {
  const [users, setUsers] = React.useState<any>();
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

    if (state == API_STATES.SUCCESS) {
      setUsers(data);
    }
  };

  // =========================================================

  // ================ Render Section =========================

  // =========================================================

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.userList}
        data={users}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <Card.UserListCard data={item} />}
      />
    </View>
  );
};

export default BetaUserListScreen;
