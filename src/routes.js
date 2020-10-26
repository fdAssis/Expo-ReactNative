import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import ListProducts from './pages/ListProducts/intex'

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>
        <Screen 
          name="ListProducts"
          component={ListProducts}
        />
      </Navigator>
    </NavigationContainer>
  );
}   
