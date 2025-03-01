import { TouchableOpacity, Text, View } from "react-native";

export default function Screen01({ navigation }) {
  function abrir() {
    navigation.navigate("Tela-two");
  }

  return (
    <View>
      <Text>Tela 1</Text>
      <TouchableOpacity onPress={abrir}>
        <Text>Abrir Tela 2</Text>
      </TouchableOpacity>
    </View>
  );
}
