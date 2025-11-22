import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login";
import MinhaAPI from "./src/pages/MinhaAPI";
import Registers from "./src/pages/Registers";
import EditItem from "./src/pages/EditItem"; // Certifique-se de que o caminho está correto
import DeleteItem from "./src/pages/DeleteItem"; // Certifique-se de que o caminho está correto
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
          name="MinhaAPI"
          component={MinhaAPI}
          options={{ title: "Minha API" }}
        />
        <Stack.Screen
          name="Registers"
          component={Registers}
          options={{ title: "Registros" }}
        />
        <Stack.Screen
          name="EditItem"
          component={EditItem}
          options={{ title: "Editar Produto" }}
        />
        <Stack.Screen
          name="DeleteItem"
          component={DeleteItem}
          options={{ title: "Excluir Produto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
