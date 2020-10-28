import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';

//Components
import Item from '../../components/Item';

//Styles
import styles from './style';

import { projectFirestore } from '../../../firebase';

const ListProducts = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts]  = useState([]);

  useEffect(() => {
    const product = 
      projectFirestore
      .collection('products')
      .onSnapshot(querySnapshot => {

        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProducts(products);
        setLoading(false);
      });

    return () => product();
  },[]);

  if(loading){
    return <ActivityIndicator />
  }

  const renderItem = ({item}) => {

    return (
      <Item
        item={item}
        key={products.key}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de produtos</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={products.key}
      />
    </View>
  );
}

export default ListProducts;