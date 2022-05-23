import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function ForgotPassword() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.descriptionText}>
          Şifrenizi tekrar almak için üye olurken kullandığınız e-posta adresini giriniz.Şifreniz e-posta adresine
          gönderilecektir.
        </Text>
        <TextInput placeholder={'Kayıtlı E-posta'} style={styles.input}></TextInput>
      </View>
      <ButtonGroup primaryButtonText={'GÖNDER'} primaryButtonPress={() => navigation.navigate('SignInScreen')}></ButtonGroup>
    </View>
  );
}
