import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'

import { RectButton } from 'react-native-gesture-handler';

import database from '../../Database';

export default function Item({ item }) {


  function handledelete() {
    database.delete(item);
  }

  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.img.url}}  style={styles.image} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={styles.text}>Produto: {item.product}</Text>
        <Text style={styles.text}>Quantidade: {item.quantily}</Text>
        <Text style={styles.text}>Preço: R$ {item.price}</Text>
      </View>
      <RectButton style={styles.touchableOpacity} onPress={handledelete}>
        <Text style={{color:"#ff5555"}}>Deletar</Text>
      </RectButton>
    </View>
  );
  
}

const styles = StyleSheet.create({

  text: {
    color: "#f8f8f2",
    fontWeight:"bold",
  },

  image: {
    width: 60, 
    height: 60, 
    borderRadius: 30
  },

  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#44475a",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },

  touchableOpacity:{
    height: 50, 
    width: 50, 
    justifyContent: "center", 
    alignItems: "center" 
  },

});