import React from 'react';
import { View, Text } from 'react-native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import { setUserInfo } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';

const EmptyProfile = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    auth().signOut();
    dispatch(setUserInfo(null));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>Çok Yakında Sizlerle..</Text>
      <ButtonGroup primaryButtonPress={logOut} primaryButtonText={'Çıkış Yap'} />
    </View>
  );
};

export default EmptyProfile;
