import { View, Text, StyleSheet } from "react-native";

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Aplicativo</Text>
      <Text>
        Essa é a aba fixa "Detalhes" do app, independente do estado ou item.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});
