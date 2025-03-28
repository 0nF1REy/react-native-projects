import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Screen02 from "./src/pages/Screen02";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function MainApp() {
  const [fontsLoaded] = useFonts({
    "Lora-Regular": require("./assets/fonts/Lora-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Merriweather_36pt-Regular": require("./assets/fonts/Merriweather_36pt-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela de Login">
        <Stack.Screen
          name="Tela de Login"
          component={Home}
          options={{
            title: "Tela de Login",
            headerTitleStyle: {
              fontFamily: "Roboto-Regular",
              fontSize: 18,
            },
          }}
        />
      </Stack.Navigator>

      <Stack.Screen
        name="Calculadora"
        component={Screen02}
        options={{
          title:
            "Calculadora: Super Bacana",
          // headerShown: false, // Desativa o header
          headerTitleStyle: {
            fontFamily: "Roboto-Regular",
            fontSize: 18,
            fontWeight: "200",
          },
        }}
      />
    </NavigationContainer>
  );
}