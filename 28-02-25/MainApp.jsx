// App.jsx
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen01 from "./src/pages/Screen01";
import Screen02 from "./src/pages/Screen02";
import Screen03 from "./src/pages/Screen03";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function MainApp() {
  const [fontsLoaded] = useFonts({
    "Forum-Regular": require("./assets/fonts/Forum-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notícias">
        <Stack.Screen
          name="Notícias"
          component={Screen01}
          options={{ title: "Notícias" }}
        />
        <Stack.Screen
          name="Primeira Noticia"
          component={Screen02}
          options={{
            title:
              "Joan Jett: A Arte de Empoderar e Inspirar em Tempos de Incerteza",
          }}
        />
        <Stack.Screen
          name="Segunda Noticia"
          component={Screen03}
          options={{
            title:
              "Suzi Quatro Lança Videoclipe de 'The Devil In Me' e Anuncia Novo Álbum com Colaboração do Filho",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
