import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function ForgotPassword() {
  const [email, setEmail] = useState(null);
  const [requesting, setRequesting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [infoText, setInfoText] = useState(null);

  const sendPasswordReset = email => {
    setRequesting(true);
    setInfoText(null);
    setErrorMessage(null);
    auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        setRequesting(false);
        setErrorMessage(null);
        setInfoText('Mail adresinize sıfırlama maili gönderilmiştir.');
      })
      .catch(function () {
        setRequesting(false);
        setErrorMessage('Geçersiz veya kayıtlı olmayan bir mail adresi girdiniz.');
        setInfoText(null);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.descriptionText}>
          Şifrenizi tekrar almak için üye olurken kullandığınız e-posta adresini giriniz.Şifreniz e-posta adresine
          gönderilecektir.
        </Text>
        <TextInput
          onChangeText={email => setEmail(email)}
          placeholder={'Kayıtlı E-posta'}
          style={errorMessage ? styles.invalidInput : styles.input}
        ></TextInput>
        {!errorMessage && !infoText && <View style={styles.seperator}></View>}
        {errorMessage && <Text style={styles.invalidText}>{errorMessage}</Text>}
        {infoText && <Text style={styles.successText}>{infoText}</Text>}
      </View>
      <ButtonGroup
        requesting={requesting}
        primaryButtonText={'GÖNDER'}
        primaryButtonPress={() => sendPasswordReset(email)}
      ></ButtonGroup>
    </View>
  );
}
