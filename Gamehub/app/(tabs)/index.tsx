import { StyleSheet, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../hooks/useTheme";
import { spacing, typography } from "../constants/theme";
import HeaderWithAvatar from "../components/HeaderWithAvatar";

export default function Index() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <HeaderWithAvatar
        userName="Retrô"
        onAvatarPress={() => router.push("/beltranis")}
      />

      <View style={styles.container}>
        <Text
          style={[styles.title, { color: theme.text, fontFamily: "monospace" }]}
        >
          Página Inicial
        </Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Bem-vindo à vibe dos anos 80!
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Ir para Xulambs"
            onPress={() => router.push("/xulambs")}
            color={theme.primary}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ir para Beltranis"
            onPress={() => router.push("/beltranis")}
            color={theme.accent}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.title,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    marginBottom: spacing.xl,
  },
  buttonContainer: {
    marginVertical: spacing.sm,
    width: "80%",
    borderRadius: 8,
    overflow: "hidden",
  },
});
