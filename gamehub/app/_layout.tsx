import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import React, { useState } from "react";

import { ThemeProvider } from "styled-components/native";
import { themes } from "./constants/theme";
import { ThemeContext } from "./contexts/ThemeContext";

type ThemeName = keyof typeof themes;

export default function RootLayout() {
  const [themeName, setThemeName] = useState<ThemeName>("retro");

  const changeTheme = (name: string) => {
    if (themes[name]) {
      setThemeName(name as ThemeName);
    }
  };

  const currentThemeObject = themes[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, changeTheme }}>
      <ThemeProvider theme={currentThemeObject}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="xulambs" />
          <Stack.Screen name="beltranis" />
        </Stack>
        <StatusBar style={themeName === "minimal" ? "dark" : "light"} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
