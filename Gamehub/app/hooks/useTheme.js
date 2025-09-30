// ============================================
// 2. HOOK PARA GERENCIAR TEMA ATUAL
// ============================================
// Crie um arquivo: /hooks/useTheme.js

import { useState, createContext, useContext } from 'react';
import { themes } from '../constants/theme'; // Importe seus temas

// Context para compartilhar o tema
const ThemeContext = createContext();

// Provider que vai envolver seu app
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('cyberpunk'); // Tema padrão
  
  const theme = themes[currentTheme];
  
  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar o tema em qualquer componente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro do ThemeProvider');
  }
  return context;
};