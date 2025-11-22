import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen01 from "./src/pages/Screen01";
import Screen02 from "./src/pages/Screen02";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

export default function MainApp() {
  const [fontsLoaded] = useFonts({
    "Lora-Regular": require("./assets/fonts/Lora-Regular.ttf"),
    "Merriweather": require("./assets/fonts/Merriweather_36pt-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Screen01}
          options={{
            title: "Healthy Habits | Home",
            headerTitleStyle: {
              fontFamily: "Roboto-Regular",
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={{
            title: "Healthy Habits | Calcular IMC",
            // headerShown: false, // Desativa o header
            headerTitleStyle: {
              fontFamily: "Roboto-Regular",
              fontSize: 18,
              fontWeight: "200",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
