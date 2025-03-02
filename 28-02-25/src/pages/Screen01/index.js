import { TouchableOpacity } from "react-native";
import { Titulo, ViewContainer } from "../../../Styles";

export default function Screen01({ navigation }) {
  function abrir() {
    navigation.navigate("Segunda Tela");
  }

  return (
    <ViewContainer>
      <Titulo>Esta é a primeira tela, eba!!!!!!!!!!!!!</Titulo>
      <TouchableOpacity onPress={abrir}>
        <Titulo>Abrir Tela 2</Titulo>
      </TouchableOpacity>
    </ViewContainer>
  );
}
