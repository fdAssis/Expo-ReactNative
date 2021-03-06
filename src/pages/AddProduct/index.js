import React, { useState } from 'react';

import { 
  ScrollView, 
  Text, 
  TextInput,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
/**========================================================== */

import styles from './style';
import UploadImage from '../../components/UploadImage';
import database from '../../Database';

/**========================================================= */


export default function ProductData() {

  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [quantily, setQuantily] = useState('');
  const [url, setUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [image, setImage] = useState(null);

  function handleAddProduct() {
    const productData = {
      product,
      price,
      quantily,
      img: {
        url,
        imageName,
      }
    }

    database.addProduct(productData);

    setImageName('');
    setPrice('');
    setProduct('');
    setProduct('');
    setQuantily('');
    setUrl('');
    setImage(null);
  }

  const navigation = useNavigation();

  function handleNavigateListProducts() {
    navigation.navigate('ListProducts');
  }

  return (
    <>
      <StatusBar barStyle="light-content"/> 
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>Adicionar produto</Text>

        <Text style={styles.label}>Nome do produto</Text>
        <TextInput
          style={styles.input}
          value={product}
          onChangeText={setProduct}
        />

        <Text style={styles.label}>Foto</Text>
        <UploadImage
          setUrlImage={setUrl}
          imageName={setImageName}
          image={image}
          setImage={setImage}
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

        <RectButton style={styles.nextButton} onPress={handleAddProduct}>
          <Text style={styles.nextButtonText}>Cadastrar</Text>
        </RectButton>

        <RectButton style={styles.listButton} onPress={handleNavigateListProducts}>
          <Text style={styles.nextButtonText}>Lista de produtos</Text>
        </RectButton>
      </ScrollView>
    </>
  )
}

