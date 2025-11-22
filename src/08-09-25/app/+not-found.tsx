import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Página não encontrada</Text>
        <Link href="/" style={styles.button}>
          Voltar para a Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B2C2C",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    color: "#F4E4C1",
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 20,
    textAlign: "center",
  },

  button: {
    fontSize: 20,
    color: "#FFB347",
    textDecorationLine: "none",
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#5E3C2C",
    borderRadius: 12,
    letterSpacing: 1,
  },
});
