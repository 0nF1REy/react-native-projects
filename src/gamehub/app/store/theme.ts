import { create } from "zustand";

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  accent: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  border: string;
  disabled: string;
}

export const themes: Record<string, Theme> = {
  cyberpunk: {
    primary: "#00ff88",
    secondary: "#ff0080",
    background: "#0a0a0a",
    surface: "#1a1a1a",
    accent: "#00ffff",
    text: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#555555",
    error: "#ff4757",
    success: "#2ed573",
    warning: "#ffa502",
    info: "#3742fa",
    border: "#333333",
    disabled: "#666666",
  },

  retro: {
    primary: "#ff6b35",
    secondary: "#004225",
    background: "#1a1a1a",
    surface: "#2d2d2d",
    accent: "#ffcc02",
    text: "#ffffff",
    textSecondary: "#cccccc",
    textMuted: "#999999",
    error: "#ff3838",
    success: "#32ff7e",
    warning: "#ff9f1a",
    info: "#18dcff",
    border: "#444444",
    disabled: "#666666",
  },

  minimal: {
    primary: "#667eea",
    secondary: "#764ba2",
    background: "#f8f9fa",
    surface: "#ffffff",
    accent: "#6c5ce7",
    text: "#2d3436",
    textSecondary: "#636e72",
    textMuted: "#b2bec3",
    error: "#d63031",
    success: "#00b894",
    warning: "#fdcb6e",
    info: "#74b9ff",
    border: "#ddd",
    disabled: "#ccc",
  },
};

type ThemeStore = {
  theme: keyof typeof themes;
  toggleTheme: (theme: keyof typeof themes) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "retro",
  toggleTheme: (theme) => set(() => ({ theme: theme })),
}));
