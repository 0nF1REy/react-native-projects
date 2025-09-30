import { createContext } from "react";

// Definição do formato do contexto
export interface ThemeContextType {
  themeName: string;
  changeTheme: (name: string) => void;
}

// Criação do contexto com um valor padrão
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
