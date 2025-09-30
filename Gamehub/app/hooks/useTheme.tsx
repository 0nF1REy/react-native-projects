import React, {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import { themes, Theme } from "../constants/theme";

interface ThemeContextType {
  theme: Theme;
  currentTheme: string;
  changeTheme: (themeName: string) => void;
  themes: Record<string, Theme>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentTheme, setCurrentTheme] = useState("retro");

  const theme = themes[currentTheme];

  const changeTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro do ThemeProvider");
  }
  return context;
};
