import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen01 from "./src/pages/Screen01";
import Screen02 from "./src/pages/Screen02";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen name="Tela-one" component={Screen01} />
        <Stack.Screen name="Tela-two" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
