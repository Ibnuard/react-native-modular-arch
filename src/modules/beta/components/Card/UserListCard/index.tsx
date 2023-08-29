import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

// interfcae
interface IUserListCard {
  data: any;
}

const UserListCard = ({data}: IUserListCard) => {
  const {name, email} = data;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textEmail}>{email}</Text>
    </TouchableOpacity>
  );
};

export default UserListCard;
