import React from 'react';
import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const isIos = Platform.OS === 'ios';
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior={isIos && 'padding'} style={styles.container}>
      <View>
        <TextInput placeholder={'E-Posta'} style={styles.input}></TextInput>
        <TextInput placeholder={'Şifre'} secureTextEntry={true} style={styles.input}></TextInput>
        <TextInput placeholder={'Şifre Tekrarı'} secureTextEntry={true} style={styles.input}></TextInput>
      </View>
      <ButtonGroup primaryButtonText={'Üye Ol'} primaryButtonPress={() => navigation.navigate('SignInScreen')}></ButtonGroup>
    </KeyboardAvoidingView>
  );
}
