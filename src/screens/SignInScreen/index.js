import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, Platform, KeyboardAvoidingView } from 'react-native';
import auth from '@react-native-firebase/auth';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../redux/actions/user';

export default function SignInScreen() {
  const navigation = useNavigation();
  const isIos = Platform.OS === 'ios';
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [requesting, setRequesting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const dispatch = useDispatch();

  const signInWithEmail = (email, password) => {
    setRequesting(true);
    setErrorPassword(null);
    setErrorMessage(null);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (user) {
        setErrorMessage(null);
        setErrorPassword(null);
        setRequesting(false);
        dispatch(setUserInfo(user));
      })
      .catch(error => {
        setRequesting(false);
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setErrorMessage(null);
          setErrorPassword('Hatalı email veya şifre');
        }

        if (error.code === 'auth/invalid-email') {
          setErrorPassword(null);
          setErrorMessage('Geçersiz email adresi girdiniz');
        } else setErrorMessage(error.code);
      });
  };
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior={isIos && 'padding'} style={styles.container}>
      <View>
        <TextInput
          keyboardType={'email-address'}
          onChangeText={text => setEmail(text.toString())}
          placeholder={'E-Posta'}
          style={errorMessage || errorPassword ? styles.invalidInput : styles.input}
        ></TextInput>
        <TextInput
          onChangeText={text => setPassword(text.toString())}
          placeholder={'Şifre'}
          secureTextEntry={true}
          style={errorPassword ? styles.invalidInput : styles.input}
        ></TextInput>
        {!errorMessage && !errorPassword && <View style={styles.seperator}></View>}
        {(errorMessage || errorPassword) && <Text style={styles.invalidText}>{errorPassword ?? errorMessage}</Text>}
        <Text onPress={() => navigation.navigate('ForgotPasswordScreen')} style={styles.forgotPasswordText}>
          Şifremi Unuttum
        </Text>
        <ButtonGroup
          requesting={requesting}
          primaryButtonText={'Giriş Yap'}
          primaryButtonPress={() => signInWithEmail(email, password)}
        ></ButtonGroup>
      </View>
      <View>
        <Text style={styles.signUpDescription}>
          {`Hala hesabın yok mu ? \nSipariş takibi ve daha kolay alışveriş için hesap oluşturun.`}
        </Text>
        <ButtonGroup
          secondaryButtonText={'Hesap Oluştur'}
          secondaryButtonPress={() => navigation.navigate('SignUpScreen')}
        ></ButtonGroup>
      </View>
    </KeyboardAvoidingView>
  );
}
