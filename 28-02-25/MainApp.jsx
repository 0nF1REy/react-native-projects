// App.jsx
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen01 from "./src/pages/Screen01";
import Screen02 from "./src/pages/Screen02";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function MainApp() {
  const [fontsLoaded] = useFonts({
    "Forum-Regular": require("./assets/fonts/Forum-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Primeira Tela">
        <Stack.Screen name="Primeira Tela" component={Screen01} />
        <Stack.Screen name="Segunda Tela" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
