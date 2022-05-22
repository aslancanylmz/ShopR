import React from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput placeholder={'E-Posta'} style={styles.input}></TextInput>
        <TextInput placeholder={'Şifre'} style={styles.input}></TextInput>
        <TextInput placeholder={'Şifre Tekrarı'} style={styles.input}></TextInput>
      </View>
      <ButtonGroup primaryButtonText={'Üye Ol'} primaryButtonPress={() => console.log('Üye Ol')}></ButtonGroup>
    </SafeAreaView>
  );
}
