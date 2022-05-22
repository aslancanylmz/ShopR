import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder={'E-Posta'} style={styles.input}></TextInput>
        <TextInput placeholder={'Şifre'} style={styles.input}></TextInput>
        <Text onPress={() => navigation.navigate('ForgotPasswordScreen')} style={styles.forgotPasswordText}>
          Şifremi Unuttum
        </Text>
        <ButtonGroup primaryButtonText={'Giriş Yap'} primaryButtonPress={() => console.log('Login')}></ButtonGroup>
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
    </View>
  );
}
