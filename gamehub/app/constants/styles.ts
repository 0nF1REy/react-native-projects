import { TextStyle } from "react-native";

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

export const addOpacity = (color: string, opacity: number): string => {
  const cleanColor = color.replace("#", "");
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  return `#${cleanColor}${alpha}`;
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

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
