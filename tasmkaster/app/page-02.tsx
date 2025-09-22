import { View, Text, StyleSheet } from "react-native";

export default function Page02() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar fora das Tabs arquivo page-02.tsx</Text>
      <Text>Essa é a versão acessada pelo Stack do RootLayout funçao ExploreOutsideTabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
});
