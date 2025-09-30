// ============================================
// beltranis.tsx - PÁGINA DE PERFIL (CYBERPUNK)
// ============================================
// Esta tela consome o hook de tema de xulambs.tsx para aplicar o tema dinamicamente
// e reutiliza a estrutura do botão de ação, demonstrando componentização.

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
// LÓGICA: Importa o hook de tema EXPORTADO de xulambs.tsx.
import { useTheme } from './xulambs';
// Importa os utilitários de tema (necessário para cores e espaçamento).
import { spacing, typography, addOpacity } from './constants/theme.js';


// ============================================
// COMPONENTE REUTILIZÁVEL: BOTÃO DE AÇÃO
// ============================================
// LÓGICA: Este componente encapsula a lógica de estilo do botão de ação.
interface ActionButtonProps {
  title: string;
  isPrimary?: boolean;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, isPrimary = true, onPress }) => {
  const { theme } = useTheme(); // LÓGICA: Obtém o tema ativo.

  return (
    <TouchableOpacity 
      style={{
        flex: 1,
        // LÓGICA: Define o estilo com base na prop 'isPrimary'.
        backgroundColor: isPrimary ? theme.primary : 'transparent',
        padding: spacing.md,
        borderRadius: 25,
        alignItems: 'center',
        borderWidth: isPrimary ? 0 : 2,
        borderColor: isPrimary ? 'transparent' : theme.primary,
        // Estilos de sombra para botões primários.
        shadowColor: isPrimary ? theme.primary : 'transparent',
        shadowOffset: { width: 0, height: isPrimary ? 2 : 0 },
        shadowOpacity: isPrimary ? 0.25 : 0,
        shadowRadius: isPrimary ? 4 : 0,
        elevation: isPrimary ? 4 : 0,
      }}
      onPress={onPress}
    >
      <Text style={{
        // LÓGICA: Define a cor do texto com base na prop 'isPrimary'.
        color: isPrimary ? theme.background : theme.primary,
        fontSize: typography.sizes.md,
        fontWeight: '600',
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


// ============================================
// COMPONENTE PRINCIPAL - BELTRANIS
// ============================================
export default function BeltranisProfile() {
  // LÓGICA: Consome o tema ativo de xulambs.tsx. O tema aqui é dinâmico!
  const { theme } = useTheme(); 
  
  // Estados e funções de demonstração para o perfil.
  const [isFollowing, setIsFollowing] = React.useState(false);

  const handleFollow = () => {
    setIsFollowing(prev => !prev);
    Alert.alert('Ação', isFollowing ? 'Deixou de seguir' : 'Começou a seguir!');
  };

  return (
    <ScrollView style={{
      flex: 1,
      // ESTILO: O background muda automaticamente com o tema.
      backgroundColor: theme.background, 
    }}>

      {/* ==================== PERFIL HEADER ==================== */}
      <View style={{
        padding: spacing.xl,
        alignItems: 'center',
        // ESTILO: Borda usando a cor de destaque (accent) do tema.
        borderBottomWidth: 3,
        borderBottomColor: theme.accent, 
      }}>
        {/* Avatar */}
        <View style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: theme.primary, 
          borderWidth: 4,
          borderColor: theme.accent, // ESTILO: Avatar com borda destacada.
          marginBottom: spacing.md,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: typography.sizes.heading, color: theme.background }}>JD</Text>
        </View>

        <Text style={{
          fontSize: typography.sizes.heading,
          fontWeight: '700',
          color: theme.text,
          textShadowColor: theme.accent, // ESTILO: Sombra de texto Cyberpunk.
          textShadowRadius: 10,
        }}>
          Jett_Decoder // ID: 2077
        </Text>
        <Text style={{
          fontSize: typography.sizes.lg,
          color: theme.textSecondary,
          marginTop: spacing.xs,
        }}>
          Netrunner | Lvl 99 | Tokyo Grid
        </Text>
      </View>

      {/* ==================== BOTÕES REUTILIZADOS ==================== */}
      <View style={{
        flexDirection: 'row',
        padding: spacing.lg,
        gap: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}>
        {/* LÓGICA: O botão reutilizado recebe o tema ativo automaticamente */}
        <ActionButton
          title={isFollowing ? 'SEGUINDO' : 'SEGUIR'}
          isPrimary={!isFollowing} // LÓGICA: Inverte a cor se já estiver seguindo.
          onPress={handleFollow}
        />
        <ActionButton
          title="MENSAGEM"
          isPrimary={true}
          onPress={() => Alert.alert('Mensagem', 'Abrindo chat seguro...')}
        />
      </View>
      
      {/* ==================== ESTATÍSTICAS ==================== */}
      <View style={{
        padding: spacing.lg,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}>
        {/* LAÇO DE REPETIÇÃO: Array de stats mapeado para criar views. */}
        {[{ label: 'GAMES', value: '45' }, { label: 'WINS', value: '250' }, { label: 'K/D', value: '2.4' }].map((stat) => (
          <View key={stat.label} style={{ alignItems: 'center' }}>
            <Text style={{ 
              fontSize: typography.sizes.heading, 
              fontWeight: '700', 
              color: theme.accent, // ESTILO: Valor em destaque.
              textShadowColor: addOpacity(theme.accent, 0.5), 
              textShadowRadius: 8,
            }}>
              {stat.value}
            </Text>
            <Text style={{ 
              fontSize: typography.sizes.sm, 
              color: theme.textSecondary,
            }}>
              {stat.label}
            </Text>
          </View>
        ))}
      </View>

      {/* ==================== CONTEÚDO ADICIONAL ==================== */}
      <View style={{ padding: spacing.lg }}>
        <Text style={{ 
          fontSize: typography.sizes.xl, 
          fontWeight: '600', 
          color: theme.primary, 
          marginBottom: spacing.md 
        }}>
          Minhas Habilidades
        </Text>
        <Text style={{ fontSize: typography.sizes.md, color: theme.text }}>
          "Codificando a próxima revolução. Minha rig é uma extensão da minha mente. Não me enfrente no Grid."
        </Text>
      </View>

    </ScrollView>
  );
}