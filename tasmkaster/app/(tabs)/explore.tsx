import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Task() {
  const router = useRouter();
  {
    /*
    
    Criação o router para navegação, essencial para lógica de navegação.

      useRouter() → hook fornecido pelo Expo Router.
      Ele te dá acesso ao objeto router, que tem métodos como:

      router.push("/rota") → navega para a rota especificada
      router.replace("/rota") → substitui a rota atual.
      router.back() → volta para a tela anterior.  
    
    */
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de task</Text>
      <Text style={styles.subtitle}>TASK</Text>
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
