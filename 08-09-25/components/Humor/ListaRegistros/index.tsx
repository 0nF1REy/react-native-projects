import React from "react";
import { View, Text, FlatList } from "react-native";

type Registro = {
  humor: string;
  nota: string;
};

type Props = {
  registros: Registro[];
};

const ListaRegistrosComponent: React.FC<Props> = ({ registros }) => {
  return (
    <View>
      <Text>Lista de Registros</Text>
      <FlatList
        data={registros}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Humor: {item.humor}</Text>
            <Text>Nota: {item.nota}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaRegistrosComponent;
