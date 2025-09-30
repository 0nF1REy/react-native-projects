// App.js básico com componentes fundamentais
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
 const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página index</Text>
      <Text style={styles.subtitle}>Primeira página?</Text>
      <Button
        title="Ir para xulambs (fora das Tabs)" //botões do stack navigation aqui que a magic acontece.
        onPress={() => router.push("/xulambs")}
        
      />

      <Button
        title="Ir para Beltranis (fora das Tabs)"
        onPress={() => router.push("/beltranis")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Mudando para coluna para evitar sobreposição
    alignItems: 'center', // Centraliza o conteúdo na tela
    gap: 8,
    padding: 16, // Adiciona um pouco de espaçamento
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18, // Ajuste do tamanho da fonte para o subtítulo
  },
});
