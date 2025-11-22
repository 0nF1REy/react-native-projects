import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const estados = [
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Bahia",
  "Paraná",
  "Santa Catarina",
  "Rio Grande do Sul",
  "Pernambuco",
  "Ceará",
  "Goiás",
];

export default function Explorar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Estados</Text>
      <FlatList
        data={estados}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.item,
              pressed && styles.itemPressionado,
            ]}
            onPress={() =>
              router.push(`/city-detail?city=${encodeURIComponent(item)}`)
            }
          >
            <Text style={styles.texto}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffd700",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  item: {
    padding: 18,
    marginBottom: 12,
    backgroundColor: "#1f1f1f",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#333",
  },
  itemPressionado: {
    backgroundColor: "#333",
    transform: [{ scale: 0.98 }],
  },
  texto: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
  },
});
