import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import Register from "./src/pages/Register";
import ProductEdit from "./src/pages/ProductEdit";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ProductEdit" component={ProductEdit}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}
