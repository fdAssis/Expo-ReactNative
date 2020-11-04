import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StatusBar} from 'react-native';
/**=================================================== */

//Components
import Item from '../../components/Item';
/**=================================================== */

//Styles
import styles from './style';
/**=================================================== */

//Database (Firebase)
import database from '../../Database'
/**=================================================== */

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    database.index(setProducts);

  },[])

  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        key={products.key}
      />
    );
  };

  return (
    <>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.container}>
      <Text style={styles.title}>Lista de produtos</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={products.key}
      />
    </View>
    </>
  );
}

export default ListProducts;