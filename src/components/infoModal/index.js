import React, { useEffect, useState } from 'react';
import { Modal, Text, View } from 'react-native';
import ButtonGroup from '../ButtonGroup';
import { Icon, iconNames } from '../Icon';
import styles from './styles';

export default function InfoModal({ visible, description, okButtonPress }) {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);
  return (
    <Modal visible={modalVisible} animationType='fade' presentationStyle='overFullScreen' transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalBackground}></View>
        <View style={styles.modalContainer}>
          <Icon style={styles.successIcon} iconName={iconNames.Success}></Icon>
          <Text style={styles.descriptionText}>{description}</Text>
          <ButtonGroup
            primaryButtonPress={() => {
              setModalVisible(false);
              okButtonPress();
            }}
            primaryButtonText={'Tamam'}
          ></ButtonGroup>
        </View>
      </View>
    </Modal>
  );
}
