import { View, Text, StyleSheet } from "react-native";

export default function Page02() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Explorar fora das Tabs - arquivo page-02.tsx
      </Text>
      <Text style={styles.subtitle}>
        Essa é a versão acessada pelo Stack do RootLayout - função
        ExploreOutsideTabs
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f0e1",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "#6b4226",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "serif",
    color: "#b59b82",
    textAlign: "center",
    lineHeight: 24,
  },
});
