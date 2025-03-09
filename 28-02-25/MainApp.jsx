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
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notícias">
        <Stack.Screen
          name="Notícias"
          component={Screen01}
          options={{ title: "Notícias - Wutai News",
            headerTitleStyle: {
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
            },
           }}
        />
        <Stack.Screen
          name="Primeira Noticia"
          component={Screen02}
          options={{
            title:
              "Lynx: Framework de Interface de Usuário da ByteDance Torna-se Open Source",
            // headerShown: false, // Desativa o header
            headerTitleStyle: {
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              fontWeight: "200",
            },
          }}
        />
        <Stack.Screen
          name="Segunda Noticia"
          component={Screen03}
          options={{
            title:
              "Rapid7 sinaliza novo zero-day do PostgreSQL relacionado à exploração do BeyondTrust",
            headerTitleStyle: {
              fontFamily: "ABeeZee-Regular",
              fontSize: 18,
              fontWeight: "200",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
