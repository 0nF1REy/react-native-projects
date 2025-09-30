import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "./hooks/useTheme";
import { spacing, typography } from "./constants/theme";

export default function NotFoundScreen() {
  const { theme } = useTheme();

  const headerStyleWithBorder = {
    backgroundColor: theme.surface,
    borderBottomWidth: 2,
    borderBottomColor: theme.border,
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "FALHA NA ROTA",
          headerShadowVisible: false,
          headerStyle: headerStyleWithBorder,
          headerTintColor: theme.primary,
          headerTitleStyle: { fontFamily: "monospace", fontWeight: "bold" },
        }}
      />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Ionicons
          name="alert-circle-outline"
          size={80}
          color={theme.accent}
          style={styles.icon}
        />

        <Text style={[styles.title, { color: theme.primary }]}>404</Text>

        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Parece que você encontrou uma falha no Grid.
        </Text>

        <Link
          href="/"
          style={[
            styles.linkButton,
            {
              backgroundColor: theme.primary,
              borderColor: theme.accent,
            },
          ]}
        >
          <Text style={[styles.linkButtonText, { color: theme.background }]}>
            VOLTAR AO INÍCIO
          </Text>
        </Link>
      </View>
    </>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  icon: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.heading * 2,
    fontWeight: "bold",
    fontFamily: "monospace",
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    fontFamily: "monospace",
    textAlign: "center",
    marginBottom: spacing.xl,
    maxWidth: 300,
  },
  linkButton: {
    marginTop: spacing.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
    borderWidth: 2,
  },
  linkButtonText: {
    fontSize: typography.sizes.lg,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
