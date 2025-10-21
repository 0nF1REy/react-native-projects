import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import React from "react";

import { ThemeProvider } from "styled-components/native";
import { useThemeStore, themes } from "./store/theme";

export default function RootLayout() {
  const theme = useThemeStore((state) => state.theme);

  const currentThemeObject = themes[theme];

  return (
    <ThemeProvider theme={currentThemeObject}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="xulambs" />
        <Stack.Screen name="gamer-profile-screen" />
        <Stack.Screen
          name="transformice-screen"
          options={{ title: "Transformice" }}
        />
        <Stack.Screen
          name="community"
          options={{ title: "Comunidade", headerShown: true }}
        />
      </Stack>
      <StatusBar style={theme === "minimal" ? "dark" : "light"} />
    </ThemeProvider>
  );
}
