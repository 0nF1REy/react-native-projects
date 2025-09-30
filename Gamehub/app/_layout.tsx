import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { ThemeProvider } from "styled-components/native";
import { themes } from "./constants/theme";

export default function RootLayout() {
  return (
    <ThemeProvider theme={themes.retro}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="xulambs" />
        <Stack.Screen name="beltranis" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
