import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';

const [text, setText] = useState(''); 

export default function App() {
  
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#150485'/>
      <View style={styles.container}>
        <TextInput style={styles.textInput} />
        <Text style={styles.title}> {text.split(' ').map((word) => word && '🍉').join(' ')}</Text>
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
    padding:10,
    fontSize:42,
  },
  textInput: {
    height: 40,
    placeholder:'Type here to translate!',
    onChangeText: text => setText(text),
    defaultValue: text,
  }
});
