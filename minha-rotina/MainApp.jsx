import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AdicionarTarefa from "./src/pages/AdicionarTarefa";
import Login from "./src/pages/Login";
import Principal from "./src/pages/Principal";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

export default function MainApp() {
  const [fontsLoaded] = useFonts({
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
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="AdicionarTarefa"
          component={AdicionarTarefa}
          options={{ title: "Adicionar Tarefa" }}
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ title: "Tela Principal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
