import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

type Registro = {
  humor: string;
  nota: string;
};

type Props = {
  adicionarRegistro: (registro: Registro) => void;
};

const RegistroHumorComponent: React.FC<Props> = ({ adicionarRegistro }) => {
  const [humor, setHumor] = useState("");
  const [nota, setNota] = useState("");

  const handleAdicionarRegistro = () => {
    if (!humor || !nota) return;
    adicionarRegistro({ humor, nota });
    setHumor("");
    setNota("");
  };

  return (
    <View>
      <Text>Registro de Humor</Text>
      <Picker
        selectedValue={humor}
        onValueChange={(itemValue) => setHumor(itemValue)}
      >
        <Picker.Item label="Selecione o Humor" value="" />
        <Picker.Item label="Feliz" value="feliz" />
        <Picker.Item label="Triste" value="triste" />
        <Picker.Item label="Neutro" value="neutro" />
      </Picker>
      <TextInput
        placeholder="Nota"
        value={nota}
        onChangeText={(text) => setNota(text)}
      />
      <Button
        title="Adicionar Registro de Humor"
        onPress={handleAdicionarRegistro}
      />
    </View>
  );
};

export default RegistroHumorComponent;
