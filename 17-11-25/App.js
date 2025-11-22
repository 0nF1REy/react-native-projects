import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Dinamica from "./src/screens/Dinamica";
import Jogar from "./src/screens/Jogar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dinamica" component={Dinamica} />
        <Stack.Screen name="Jogar" component={Jogar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
