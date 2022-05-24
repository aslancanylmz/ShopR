import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';
import InfoModal from '../../components/infoModal';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../redux/actions/user';

export default function SignUpScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [requesting, setRequesting] = useState(false);
  const [successSignUpModalVisible, setSuccessSignUpModalVisible] = useState(false);
  const [user, setUser] = useState(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

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
    setRequesting(true);
    if (validationConfirmPassword(password, confirmPassword)) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          setUser(user);
          setRequesting(false);
          setSuccessSignUpModalVisible(true);
        })
        .catch(error => {
          setRequesting(false);
          if (error.code === 'auth/email-already-in-use') {
            setErrorMessage('Bu email adresi zaten kullanılmaktadır.');
          }
          if (error.code === 'auth/invalid-email') {
            setErrorMessage('Geçersiz email adresi girdiniz.');
          }
        });
    } else {
      setRequesting(false);
      setErrorMessage('Girdiğiniz şifreler eşleşmedi.Tekrar deneyin.');
    }
  };

  const isIos = Platform.OS === 'ios';
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior={isIos && 'padding'} style={styles.container}>
      <View>
        <TextInput
          onChangeText={text => setEmail(text.toString())}
          placeholder={'E-Posta'}
          style={errorMessage && validConfirmPassword ? styles.invalidInput : styles.input}
        ></TextInput>
        <TextInput
          onChangeText={text => setPassword(text.toString())}
          placeholder={'Şifre'}
          secureTextEntry={true}
          style={validConfirmPassword ? styles.input : styles.invalidInput}
        ></TextInput>
        <TextInput
          onChangeText={text => setConfirmPassword(text.toString())}
          placeholder={'Şifre Tekrarı'}
          secureTextEntry={true}
          style={validConfirmPassword ? styles.input : styles.invalidInput}
        ></TextInput>
        {(!validConfirmPassword || errorMessage) && <Text style={styles.invalidPasswordText}>{errorMessage}</Text>}
      </View>
      <ButtonGroup
        requesting={requesting}
        primaryButtonText={'Üye Ol'}
        primaryButtonPress={() => signUpWithEmail(email, password)}
      ></ButtonGroup>
      <InfoModal
        visible={successSignUpModalVisible}
        description={`${user?.user.email} email adresi ile üyeliğiniz \nbaşarıyla oluşturulmuştur.\nAnasayfaya yönlendiriliyorsunuz.`}
        okButtonPress={() => dispatch(setUserInfo(user))}
      ></InfoModal>
    </KeyboardAvoidingView>
  );
}
