import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import ListProducts from './pages/ListProducts/intex';
import AddProduct from './pages/AddProduct/index';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
      screenOptions={{headerShown:false}}>
      
        <Screen 
          name="AddProduct"
          component={AddProduct}
        />

        <Screen 
          name="ListProducts"
          component={ListProducts}
        />

      </Navigator>
    </NavigationContainer>
  );
}   
