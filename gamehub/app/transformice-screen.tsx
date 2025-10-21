import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useThemeStore, themes } from "@/app/store/theme";
import { spacing, typography } from "@/app/constants/styles";

export default function TransformiceScreen() {
  const handleEnterRoom = () => {};
  const handleViewPlayers = () => {};
  const { theme: themeName } = useThemeStore();
  const theme = themes[themeName];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/transformice-icon.png")}
          style={styles.image}
          accessibilityLabel="Ícone do Transformice"
        />
        <Text style={[styles.title, { color: theme.primary }]}>
          Transformice
        </Text>
      </View>

      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        Bem-vindo à sala do Transformice!
      </Text>
      <Text style={[styles.body, { color: theme.text }]}>
        Transformice é um jogo multiplayer onde você controla um ratinho em
        busca de queijo, colaborando e competindo com outros jogadores.
        Participe da sala para conversar, ver detalhes e interagir com a
        comunidade!
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={handleEnterRoom}
          accessibilityLabel="Entrar na sala do Transformice"
        >
          <Text style={[styles.buttonText, { color: theme.text }]}>
            Entrar na sala
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.secondary }]}
          onPress={handleViewPlayers}
          accessibilityLabel="Ver jogadores do Transformice"
        >
          <Text style={[styles.buttonText, { color: theme.text }]}>
            Ver jogadores
          </Text>
        </TouchableOpacity>
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
  header: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.heading,
    fontWeight: "700",
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    fontWeight: "600",
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  body: {
    fontSize: typography.sizes.md,
    textAlign: "center",
    marginBottom: spacing.lg,
    color: "#444",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.md,
  },
  button: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    marginHorizontal: spacing.sm,
    elevation: 2,
  },
  buttonText: {
    fontSize: typography.sizes.md,
    fontWeight: "600",
    textAlign: "center",
  },
});
