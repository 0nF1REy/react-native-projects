import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Screen01';
import Screen02 from './src/pages/Screen02';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

export default function MainApp() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Healthy Habits' }}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={{ title: 'IMC' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
