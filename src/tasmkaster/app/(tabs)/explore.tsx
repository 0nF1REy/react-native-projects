import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Task() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Task</Text>
      <Text style={styles.subtitle}>TASK</Text>
      <Button
        title="Ir para a página 03"
        onPress={() => router.push("/page-02")}
        color="#6b4226"
      />
      <Button
        title="Ir para a página 04"
        onPress={() => router.push("/page-04")}
        color="#6b4226"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#f5f0e1",
    gap: 12,
    padding: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    fontFamily: "serif",
    color: "#6b4226",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "serif",
    color: "#b59b82",
  },
});
