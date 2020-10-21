import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#150485'/>
      <View style={styles.container}>
        <Text style={styles.title}>Francisco de Assis</Text>
        <StatusBar style="auto" />
      </View>
     </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#150485',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold'
  },
});
