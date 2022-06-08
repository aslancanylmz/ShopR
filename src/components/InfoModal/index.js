import React from 'react';
import { Modal, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { modalVisible } from '../../redux/selectors';
import ButtonGroup from '../ButtonGroup';
import { Icon, iconNames } from '../Icon';
import styles from './styles';

export default function InfoModal({ description, okButtonPress }) {
  return (
    <Modal visible={useSelector(modalVisible)} animationType='fade' presentationStyle='overFullScreen' transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBackground}></View>
        <View style={styles.modalContainer}>
          <Icon style={styles.successIcon} iconName={iconNames.Success}></Icon>
          <Text style={styles.descriptionText}>{description}</Text>
          <ButtonGroup
            primaryButtonPress={() => {
              okButtonPress();
            }}
            primaryButtonText={'Tamam'}
          ></ButtonGroup>
        </View>
      </View>
    </Modal>
  );
}
