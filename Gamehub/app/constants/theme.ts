import { TextStyle } from "react-native";

// ============================================
// TIPAGEM DOS TEMAS
// ============================================
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

// Objeto 'themes'
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

// ============================================
// UTILIDADES
// ============================================
export const addOpacity = (color: string, opacity: number): string => {
  const cleanColor = color.replace("#", "");
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  return `#${cleanColor}${alpha}`;
};

// ============================================
// CONSTANTES DE ESPAÇAMENTO
// ============================================
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// ============================================
// CONSTANTES DE TIPOGRAFIA
// ============================================
type FontWeight = TextStyle["fontWeight"];

interface Typography {
  sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    title: number;
    heading: number;
  };
  weights: {
    light: FontWeight;
    normal: FontWeight;
    medium: FontWeight;
    bold: FontWeight;
    heavy: FontWeight;
  };
}

export const typography: Typography = {
  sizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    title: 24,
    heading: 32,
  },

  weights: {
    light: "300",
    normal: "400",
    medium: "500",
    bold: "600",
    heavy: "700",
  },
};
