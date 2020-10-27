import React, { useState } from 'react';

import { 
  ScrollView, 
  Text, 
  TextInput,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import styles from './style';

import {projectFirestore} from '../../../firebase';

import UploadImage from '../../components/UploadImage';
import { useNavigation } from '@react-navigation/native';

export default function OrphanageData() {

  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [quantily, setQuantily] = useState('');
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState('');


  async function handleAddProduct() {
    const productData = {
      product,
      price,
      quantily,
      img: {
        url,
        imageName,
      }
    }

    await projectFirestore
    .collection('products')
    .add(productData).then(() => {
    });
    setImageName('');
    setImages([]);
    setPrice('');
    setProduct('');
    setProduct('');
    setQuantily('');
    setUrl('');
  }

  const navigation = useNavigation();
  function handleNavigateListProducts() {
    navigation.navigate('ListProducts');
  }


  return (
    
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Adicionar produto</Text>

      <Text style={styles.label}>Nome do produto</Text>
      <TextInput
        style={styles.input}
        value={product}
        onChangeText={setProduct}
      />

      <Text style={styles.label}>Preço</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        multiline
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        multiline
        value={quantily}
        onChangeText={setQuantily}
      />    

      <Text style={styles.label}>Foto</Text>
      <UploadImage
        images={images}
        setImages={setImages}
        urlImage={setUrl}
        imageName={setImageName}
      />

      <RectButton style={styles.nextButton} onPress={handleAddProduct}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>

      <RectButton style={styles.listButton} onPress={handleNavigateListProducts}>
        <Text style={styles.nextButtonText}>Lista de produtos</Text>
      </RectButton>
    </ScrollView>
  )
}

