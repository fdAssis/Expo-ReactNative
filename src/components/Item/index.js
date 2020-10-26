import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

export default function Item({ item}) {
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: item.url_image }} style={styles.image} />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>Produto: {item.name}</Text>
        <Text>Preço: {item.price}</Text>
      </View>

      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={{ color: "red" }}>Editar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  image: {
    width: 60, 
    height: 60, 
    borderRadius: 30
  },

  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff123",
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