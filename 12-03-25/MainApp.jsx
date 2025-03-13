import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen01 from "./src/pages/Screen01";
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
      <Stack.Navigator initialRouteName="Primeira Tela">
        <Stack.Screen
          name="Primeira Tela"
          component={Screen01}
          options={{ title: "Página Principal - Muito Bacana",
            headerTitleStyle: {
              fontFamily: "Roboto-Regular",
              fontSize: 18,
            },
           }}
        />
        <Stack.Screen
          name="Segunda Tela"
          component={Screen02}
          options={{
            title:
              "Segunda Tela: Muito Bacana!",
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
