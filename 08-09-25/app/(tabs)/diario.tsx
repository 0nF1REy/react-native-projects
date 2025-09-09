import React, { useState } from "react";
import { View } from "react-native";
import ListaRegistros from "@/components/Humor/ListaRegistros";
import RegistroHumorComponent from "@/components/Humor/RegistroHumor";

type Registro = {
  humor: string;
  nota: string;
};

export default function DiarioScreen() {
  const [registros, setRegistros] = useState<Registro[]>([]);

  const adicionarRegistro = (novoRegistro: Registro) => {
    setRegistros((prev) => [...prev, novoRegistro]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <RegistroHumorComponent adicionarRegistro={adicionarRegistro} />
      <ListaRegistros registros={registros} />
    </View>
  );
}
