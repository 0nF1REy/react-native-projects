// ============================================
// TEMAS DISPONÍVEIS PARA VOTAÇÃO - GameHub Community
// ============================================
// Arquivo com todos os temas de cores que os participantes podem escolher
// durante a dinâmica de construção do app

// Temas disponíveis para votação
export const themes = {
  cyberpunk: {
    // ========================================
    // CORES PRINCIPAIS
    // ========================================
    primary: '#00ff88',      // Verde neon principal - botões, destaques
    secondary: '#ff0080',    // Rosa neon secundário - elementos de apoio
    background: '#0a0a0a',   // Fundo preto profundo
    surface: '#1a1a1a',     // Cards, superfícies elevadas
    accent: '#00ffff',       // Cyan para destaques especiais
    
    // ========================================
    // CORES DE TEXTO
    // ========================================
    text: '#ffffff',         // Texto branco principal
    textSecondary: '#888888', // Texto secundário (cinza claro)
    textMuted: '#555555',    // Texto menos importante
    
    // ========================================
    // CORES DE STATUS
    // ========================================
    error: '#ff4757',        // Vermelho para erros
    success: '#2ed573',      // Verde para sucesso
    warning: '#ffa502',      // Laranja para avisos
    info: '#3742fa',         // Azul para informações
    
    // ========================================
    // CORES EXTRAS
    // ========================================
    border: '#333333',       // Bordas sutis
    disabled: '#666666',     // Elementos desabilitados
    shadow: '#000000',       // Sombras
  },
  
  retro: {
    // ========================================
    // CORES PRINCIPAIS
    // ========================================
    primary: '#ff6b35',      // Laranja vibrante dos anos 80
    secondary: '#004225',    // Verde escuro complementar
    background: '#1a1a1a',   // Fundo escuro
    surface: '#2d2d2d',     // Superfícies mais claras
    accent: '#ffcc02',       // Amarelo dourado
    
    // ========================================
    // CORES DE TEXTO
    // ========================================
    text: '#ffffff',         // Texto branco
    textSecondary: '#cccccc', // Cinza claro
    textMuted: '#999999',    // Cinza médio
    
    // ========================================
    // CORES DE STATUS
    // ========================================
    error: '#ff3838',        // Vermelho vibrante
    success: '#32ff7e',      // Verde claro neon
    warning: '#ff9f1a',      // Laranja aviso
    info: '#18dcff',         // Azul cyan
    
    // ========================================
    // CORES EXTRAS
    // ========================================
    border: '#444444',       // Bordas
    disabled: '#666666',     // Desabilitado
    shadow: '#000000',       // Sombras
  },
  
  minimal: {
    // ========================================
    // CORES PRINCIPAIS
    // ========================================
    primary: '#667eea',      // Azul suave moderno
    secondary: '#764ba2',    // Roxo complementar
    background: '#f8f9fa',   // Fundo claro clean
    surface: '#ffffff',     // Branco puro para cards
    accent: '#6c5ce7',       // Roxo vibrante
    
    // ========================================
    // CORES DE TEXTO
    // ========================================
    text: '#2d3436',         // Texto escuro principal
    textSecondary: '#636e72', // Cinza médio
    textMuted: '#b2bec3',    // Cinza claro
    
    // ========================================
    // CORES DE STATUS
    // ========================================
    error: '#d63031',        // Vermelho suave
    success: '#00b894',      // Verde moderno
    warning: '#fdcb6e',      // Amarelo suave
    info: '#74b9ff',         // Azul informativo
    
    // ========================================
    // CORES EXTRAS
    // ========================================
    border: '#ddd',          // Bordas claras
    disabled: '#ccc',        // Elementos desabilitados
    shadow: '#rgba(0,0,0,0.1)', // Sombra sutil
  }
};

// ============================================
// PROPRIEDADES QUE ESTAVAM FALTANDO
// ============================================
/*

O que foi adicionado ao seu arquivo original:

1. CORES DE TEXTO:
   - textSecondary: Para textos menos importantes
   - textMuted: Para textos muito sutis

2. CORES DE STATUS:
   - error: Para mensagens de erro
   - success: Para confirmações e sucessos
   - warning: Para avisos
   - info: Para informações

3. CORES EXTRAS:
   - border: Para bordas de elementos
   - disabled: Para elementos desabilitados
   - shadow: Para sombras e elevação

4. TEMA MINIMAL COMPLETO:
   - Todas as propriedades para tema claro

*/

// ============================================
// UTILIDADES PARA USAR COM OS TEMAS
// ============================================

// Função para adicionar transparência a qualquer cor
export const addOpacity = (color, opacity) => {
  // Remove o # se existir
  const cleanColor = color.replace('#', '');
  
  // Converte opacity (0-1) para hex (00-FF)
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
  
  return `#${cleanColor}${alpha}`;
};

// Exemplo de uso: addOpacity(theme.primary, 0.2) // 20% de transparência

// ============================================
// CONSTANTES DE ESPAÇAMENTO
// ============================================
export const spacing = {
  xs: 4,    // Extra pequeno
  sm: 8,    // Pequeno  
  md: 16,   // Médio
  lg: 24,   // Grande
  xl: 32,   // Extra grande
  xxl: 48   // Extra extra grande
};

// ============================================
// CONSTANTES DE TIPOGRAFIA
// ============================================
export const typography = {
  // Tamanhos de fonte
  sizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    title: 24,
    heading: 32
  },
  
  // Pesos de fonte
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    bold: '600',
    heavy: '700'
  }
};

// ============================================
// CONFIGURAÇÕES DE SOMBRA
// ============================================
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4
  },
  
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8
  }
};

// ============================================
// EXEMPLO DE USO COMPLETO
// ============================================
/*

// IMPORTAR TUDO
import { themes, addOpacity, spacing, typography } from './constants/theme.js';
import { useTheme } from './hooks/useTheme';

// USAR NO COMPONENTE
const MyComponent = () => {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      padding: spacing.lg,                    // 24px
    },
    
    card: {
      backgroundColor: theme.surface,
      borderColor: addOpacity(theme.primary, 0.2), // Primary com 20% transparência
      borderWidth: 1,
    },
    
    title: {
      color: theme.text,
      fontSize: typography.sizes.title,       // 24px
      fontWeight: typography.weights.bold,    // '600'
    },
    
    subtitle: {
      color: theme.textSecondary,
      fontSize: typography.sizes.md,          // 14px
    },
    
    errorMessage: {
      color: theme.error,                     // Cor de erro do tema
      fontSize: typography.sizes.sm,
    }
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <Text style={styles.subtitle}>Subtítulo</Text>
    </View>
  );
};

*/