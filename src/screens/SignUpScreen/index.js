import React from 'react';
import { TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder={'E-Posta'} style={styles.input}></TextInput>
        <TextInput placeholder={'Şifre'} style={styles.input}></TextInput>
        <TextInput placeholder={'Şifre Tekrarı'} style={styles.input}></TextInput>
      </View>
      <ButtonGroup primaryButtonText={'Üye Ol'} primaryButtonPress={() => navigation.navigate('SignInScreen')}></ButtonGroup>
    </View>
  );
}
