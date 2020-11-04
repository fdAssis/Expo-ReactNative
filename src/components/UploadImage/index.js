import React, {useState} from 'react';
import {
  TouchableOpacity,
  LogBox,
  View,
  Image,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'

import database from '../../Database';

const UploadImage = ({ setUrlImage, imageName, image, setImage }) => {
  
  LogBox.ignoreLogs(['Setting a timer']);

  const handleSelectImages = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      return alert('Necessário conceder acesso as fotos.');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) return;

    const {uri: imageUri} = result;
    setImage(imageUri);

    const resultUri = await fetch(result.uri);
    const blob = await resultUri.blob();

    database.addImage(blob, imageName, setUrlImage);
  }

return (
  <>
    <View style={styles.uploadedImageContainer}>
      {image &&
        <Image
          style={styles.uploadedImage}
          source={{ uri: image }}
        />
      }
    </View>

    <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
      <Feather name="plus" size={24} color="#50fa7b" />
    </TouchableOpacity>
  </>
);
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  uploadedImageContainer: {
    flexDirection: 'row'
  },

  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8
  },

  imagesInput: {
    backgroundColor: '#44475a',
    borderStyle: 'dashed',
    borderColor: '#50fa7b',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
});

export default UploadImage;