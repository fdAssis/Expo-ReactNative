import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { projectStorage } from '../../../firebase';


const UploadImage = ({ setImages, images, urlImage, imageName }) => {

  const handleSelectImages = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      return alert('Necessário conceder acesso as fotos.');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    })

    if (result.cancelled) return;

    const { uri: image } = result;
    setImages([...images, image]);

    // = = = = = = = = = //
    const resultUri = await fetch(result.uri);
    const blob = await resultUri.blob();

    const imageFileName = `IMG_${Math.random(4000)}`;

    const storageRef = projectStorage.ref('products').child(imageFileName)

    return storageRef.put(blob).on('state_changed', upload => {
        //console.log(upload.metadata.name())
        imageName(imageFileName);
      }, err => {
        console.log(err);
      }, async () => {
        const downloadUrl = await storageRef.getDownloadURL();
        urlImage(downloadUrl);
      }
    );

  }

return (
  <>
    <View style={styles.uploadedImageContainer}>
      {images.map((image) => {
        return (
          <Image
            key={image}
            style={styles.uploadedImage}
            source={{ uri: image }}
          />
        );
      })}
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