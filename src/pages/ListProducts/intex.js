import React, { useState } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

//Components
import Item from '../../components/Item';

//Styles
import styles from './style';


const DATA = [
  {
    "id": "QD2M0293DJ923DJ23IDKO99",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },

  {
    "id": "QD2M0293DJ923OIIDJ23IFFDK",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },

  {
    "id": "QFFD2M0293DJ923DJ23KKIDK",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },

  {
    "id": "QD2M0293DFJ923DJ23IDK",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },

  {
    "id": "QD2MFF0293DJ923DJ23IDKO99",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },

  {
    "id": "QD2M0293DJ923OIIDJ23FFIDK",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },

  {
    "id": "QD2FFM0293DJ923DJ23KKIDK",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },

  {
    "id": "QD2M0293DJ9FF23DJ23IDK",
    "name": "Laranja",
    "price": "1000",
    "url_image": "https://firebasestorage.googleapis.com/v0/b/donateapp-99c9b.appspot.com/o/products%2Fimages%20(1).jfif?alt=media&token=8d7e71a4-b2ca-406c-9177-a47d91136678",
  },


];


const ListProducts = () => {

  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>

  );

}

export default ListProducts;