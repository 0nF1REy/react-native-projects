import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chave Mágica">
        <Stack.Screen name="Chave Mágica" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;