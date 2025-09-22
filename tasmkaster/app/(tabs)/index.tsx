import { StyleSheet, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página index</Text>
      <Text style={styles.subtitle}>INDEX</Text>
      <Button
        title="Ir para a página 03 (fora das Tabs)"
        onPress={() => router.push("/page-03")}
      />

      <Button
        title="Ir para a página 04 (fora das Tabs)"
        onPress={() => router.push("/page-04")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
  },
});
