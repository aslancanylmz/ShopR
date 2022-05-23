import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function SignUpScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);

  const validationConfirmPassword = (password, confirmPassword) => {
    if (password === confirmPassword) {
      setValidConfirmPassword(true);
      return true;
    } else {
      setValidConfirmPassword(false);
      return false;
    }
  };

  const signUpWithEmail = (email, password) => {
    if (validationConfirmPassword(password, confirmPassword)) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else console.log('Şifreler aynı olmalı');
  };

  //const navigation = useNavigation();
  const isIos = Platform.OS === 'ios';
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior={isIos && 'padding'} style={styles.container}>
      <View>
        <TextInput onChangeText={text => setEmail(text.toString())} placeholder={'E-Posta'} style={styles.input}></TextInput>
        <TextInput
          onChangeText={text => setPassword(text.toString())}
          placeholder={'Şifre'}
          secureTextEntry={true}
          style={styles.input}
        ></TextInput>
        <TextInput
          onChangeText={text => setConfirmPassword(text.toString())}
          placeholder={'Şifre Tekrarı'}
          secureTextEntry={true}
          style={validConfirmPassword ? styles.input : styles.invalidInput}
        ></TextInput>
        {!validConfirmPassword && <Text style={styles.invalidPasswordText}>Girdiğiniz şifreler eşleşmedi. Tekrar deneyin.</Text>}
      </View>
      <ButtonGroup primaryButtonText={'Üye Ol'} primaryButtonPress={() => signUpWithEmail(email, password)}></ButtonGroup>
    </KeyboardAvoidingView>
  );
}
