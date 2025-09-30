// ============================================
// xulambs.tsx - DEMONSTRAÇÃO DE COMPONENTE
// ============================================
// Esta tela demonstra como usar componentes da biblioteca themes.js
// É um exemplo prático para a dinâmica do workshop GameHub

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
// Importação dos utilitários de tema (cores, espaçamento, tipografia)
import { themes, addOpacity, spacing, typography, shadows } from './constants/theme.js';


// ============================================
// ============================================
// HOOK DE TEMA SIMPLIFICADO PARA DEMONSTRAÇÃO
// ============================================

// 1. Defina o tipo do ThemeName como qualquer uma das chaves do objeto 'themes'
// Essa tipagem garante a segurança do acesso às chaves do objeto 'themes'.
type ThemeName = keyof typeof themes;

export const useTheme = () => { //retire o export e veja o que acontece!! se vc entendeu isso parabéns vocÊ é "REACTEIRO!!!" comentario feito pelo professor aqui!
  // 2. Defina o tipo do useState para ThemeName
  // LÓGICA: Inicializa o estado com o tema 'cyberpunk'.
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('cyberpunk');
  
  return {
    // LÓGICA: Retorna o objeto de tema completo (cores) baseado na string do estado atual.
    theme: themes[currentTheme], 
    currentTheme,
    // LÓGICA: Permite alterar o estado do tema.
    changeTheme: setCurrentTheme,
    // LÓGICA: Retorna um array com os nomes de todos os temas disponíveis (chaves do objeto themes).
    availableThemes: Object.keys(themes) as ThemeName[] // Adiciona type assertion para segurança.
  };
};


// ============================================
// COMPONENTE PRINCIPAL - DEMONSTRAÇÃO
// ============================================
export default function ExploreOutsideTabs2() {
  // LÓGICA: Desestrutura as variáveis e funções de tema do hook personalizado.
  const { theme, currentTheme, changeTheme, availableThemes } = useTheme();
  
  // ============================================
  // ESTADOS PARA DEMONSTRAÇÃO
  // ============================================
  const [likes, setLikes] = useState(42);
  const [isOnline, setIsOnline] = useState(true); // LÓGICA: Estado para o status online/offline.
  
  // ============================================
  // FUNÇÕES DE DEMONSTRAÇÃO
  // ============================================
  const handleLike = () => {
    // LÓGICA: Atualiza o estado incrementando o número de likes.
    setLikes(prev => prev + 1);
    Alert.alert('Curtiu!', 'Like adicionado!');
  };
  
  const handleShare = () => {
    Alert.alert('Compartilhado!', 'Post compartilhado com sucesso!');
  };
  
  const toggleOnlineStatus = () => {
    // LÓGICA: Alterna o estado de isOnline (true/false) para simular um toggle.
    setIsOnline(prev => !prev);
  };

  // ============================================
  // RENDER - SHOWCASE DOS COMPONENTES
  // ============================================
  return (
    <ScrollView style={{
      flex: 1,
      // ESTILO: Define o fundo da tela usando a cor de fundo do tema ativo.
      backgroundColor: theme.background,
    }}>
      
      {/* ==================== HEADER ==================== */}
      <View style={{
        padding: spacing.lg,
        alignItems: 'center',
        borderBottomWidth: 1,
        // ESTILO: Cor da borda com 20% de opacidade da cor primária.
        borderBottomColor: addOpacity(theme.primary, 0.2),
      }}>
        <Text style={{
          fontSize: typography.sizes.heading,
          fontWeight: '700',
          color: theme.text,
          marginBottom: spacing.xs,
        }}>
          GameHub Demo
        </Text>
        <Text style={{
          fontSize: typography.sizes.md,
          color: theme.textSecondary,
          textAlign: 'center',
        }}>
          Demonstração de componentes usando themes.js
        </Text>
      </View>
      
      {/* ==================== SELETOR DE TEMA ==================== */}
      <View style={{
        padding: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}>
        <Text style={{
          fontSize: typography.sizes.xl,
          fontWeight: '600',
          color: theme.primary,
          marginBottom: spacing.md,
        }}>
          Temas Disponíveis
        </Text>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: spacing.sm,
        }}>
          {/* LAÇO DE REPETIÇÃO: Mapeia (map) a lista de temas disponíveis. */}
          {availableThemes.map((themeName) => (
            <TouchableOpacity
              key={themeName}
              style={{
                paddingHorizontal: spacing.md,
                paddingVertical: spacing.sm,
                borderRadius: 20,
                borderWidth: 2,
                // ESTILO: Usa a cor primária do TEMA DO BOTÃO como fundo.
                backgroundColor: themes[themeName].primary,
                // LÓGICA: Se o tema for o 'currentTheme', usa a cor de destaque (accent) na borda.
                borderColor: currentTheme === themeName ? theme.accent : 'transparent',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
              // LÓGICA: Ao clicar, altera o tema para o nome do tema deste botão.
              onPress={() => changeTheme(themeName)}
            >
              <Text style={{
                color: '#000000', // ESTILO: Texto fixo em preto para ser legível em fundos coloridos.
                fontSize: typography.sizes.sm,
                fontWeight: '600',
              }}>
                {/* LÓGICA: Capitaliza a primeira letra do nome do tema para exibição. */}
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ==================== CARDS DE EXEMPLO ==================== */}
      <View style={{
        padding: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}>
        <Text style={{
          fontSize: typography.sizes.xl,
          fontWeight: '600',
          color: theme.primary,
          marginBottom: spacing.md,
        }}>
          Componentes de Card
        </Text>
        
        {/* Player Card Example */}
        <View style={{
          flexDirection: 'row',
          backgroundColor: theme.surface,
          padding: spacing.md,
          borderRadius: 15,
          marginBottom: spacing.md,
          alignItems: 'center',
          // ESTILO: Aplica a sombra definida
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 4,
          borderWidth: 1,
          borderColor: addOpacity(theme.primary, 0.1),
        }}>
          
          {/* Avatar com status de bolha */}
          <View style={{ position: 'relative', marginRight: spacing.md }}>
            <View style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: theme.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{
                color: theme.background,
                fontSize: 18,
                fontWeight: '600',
              }}>
                HC
              </Text>
            </View>
            {/* LÓGICA: Bolha de status (Online/Offline) */}
            <View style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 15,
              height: 15,
              borderRadius: 7.5,
              // LÓGICA: Muda a cor da bolha com base no estado 'isOnline'.
              backgroundColor: isOnline ? theme.success : theme.error,
              borderWidth: 2,
              borderColor: theme.surface,
            }} />
          </View>
          
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: typography.sizes.lg,
              fontWeight: '600',
              color: theme.text,
              marginBottom: spacing.xs,
            }}>
              Prof: Beto Pro
            </Text>
            <Text style={{
              fontSize: typography.sizes.sm,
              color: theme.textSecondary,
              marginBottom: spacing.xs,
            }}>
              Magic The Gathering
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{
                fontSize: typography.sizes.xs,
                color: theme.textMuted,
                marginRight: spacing.sm,
              }}>
                Level 87
              </Text>
              <Text style={{
                fontSize: typography.sizes.xs,
                color: theme.textMuted,
              }}>
                • Diamante
              </Text>
            </View>
          </View>
          
          {/* ==================== BOTÃO ON/OFF (ESTILIZADO E CORRIGIDO) ==================== */}
          <TouchableOpacity 
            style={{
              width: 50,  // CORRIGIDO: Reduzido de 60 para 50 para melhor ajuste de layout.
              height: 50, // CORRIGIDO: Reduzido de 60 para 50.
              borderRadius: 25, // CORRIGIDO: Ajustado para 50/2 = 25.
              // LÓGICA/ESTILO: Usa cor de destaque (accent) ou erro (error) para o status (Efeito Brilhante).
              backgroundColor: isOnline ? theme.accent : theme.error,
              justifyContent: 'center',
              alignItems: 'center',
              // ESTILO: Adiciona borda colorida para efeito de brilho.
              borderWidth: 2,
              borderColor: isOnline ? addOpacity(theme.accent, 0.7) : addOpacity(theme.error, 0.7),
              // ESTILO: Aplica sombra centralizada e intensa para simular o BRILHO NEON.
              shadowColor: isOnline ? theme.accent : theme.error, 
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.8,
              shadowRadius: 8, 
              elevation: 8, 
            }}
            // LÓGICA: Chama a função que inverte o estado (true/false).
            onPress={toggleOnlineStatus}
          >
            <Text style={{ 
              fontSize: typography.sizes.sm, // CORRIGIDO: Reduzido o tamanho da fonte para 'sm' para caber.
              fontWeight: '700',
              color: theme.background, // ESTILO: Cor de alto contraste para o texto no botão.
              // ESTILO: Sombra no texto para efeito de destaque.
              textShadowColor: addOpacity(theme.background, 0.5), 
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }}>
              {/* LÓGICA: Exibe "ON" ou "OFF" com base no estado 'isOnline'. */}
              {isOnline ? 'ON' : 'OFF'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Game Card Example */}
        <View style={{
          flexDirection: 'row',
          backgroundColor: theme.surface,
          padding: spacing.md,
          borderRadius: 15,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 4,
          borderWidth: 1,
          borderColor: theme.border,
        }}>
          {/* Quadrado do Logo "GAME" */}
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: addOpacity(theme.secondary, 0.2),
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: spacing.md,
          }}>
            <Text style={{ 
              fontSize: typography.sizes.lg // CORRIGIDO: Reduzido de 'heading' para 'lg' para caber no quadrado.
            }}>
              GAME
            </Text>
          </View>
          
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: typography.sizes.lg,
              fontWeight: '600',
              color: theme.text,
              marginBottom: spacing.xs,
            }}>
              League of Legends
            </Text>
            <Text style={{
              fontSize: typography.sizes.sm,
              color: theme.textSecondary,
              marginBottom: spacing.xs,
            }}>
              MOBA • Competitivo
            </Text>
            {/* ESTILO: Texto de status 'online' usando a cor de sucesso. */}
            <Text style={{
              fontSize: typography.sizes.sm,
              color: theme.success,
            }}>
              15.2k online
            </Text>
          </View>
          
          <TouchableOpacity style={{
            // ESTILO: Botão de ação, usando a cor primária do tema.
            backgroundColor: theme.primary,
            paddingHorizontal: spacing.md,
            paddingVertical: spacing.sm,
            borderRadius: 20,
          }}>
            <Text style={{
              color: theme.background, // ESTILO: Texto com cor de alto contraste.
              fontSize: typography.sizes.sm,
              fontWeight: '600',
            }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ==================== BOTÕES DE AÇÃO ==================== */}
      <View style={{
        padding: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}>
        <Text style={{
          fontSize: typography.sizes.xl,
          fontWeight: '600',
          color: theme.primary,
          marginBottom: spacing.md,
        }}>
          Botões Interativos
        </Text>
        
        <View style={{
          flexDirection: 'row',
          gap: spacing.md,
        }}>
          {/* Botão Sólido (Like) */}
          <TouchableOpacity 
            style={{
              flex: 1,
              backgroundColor: theme.primary,
              padding: spacing.md,
              borderRadius: 25,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 4,
            }}
            // LÓGICA: Chama a função para adicionar like.
            onPress={handleLike}
          >
            <Text style={{
              color: theme.background,
              fontSize: typography.sizes.md,
              fontWeight: '600',
            }}>
              {/* LÓGICA: Exibe o contador de likes do estado. */}
              LIKE {likes}
            </Text>
          </TouchableOpacity>
          
          {/* Botão Outline (Share) */}
          <TouchableOpacity 
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              padding: spacing.md,
              borderRadius: 25,
              alignItems: 'center',
              borderWidth: 2,
              borderColor: theme.primary, // ESTILO: Borda usando a cor primária do tema.
            }}
            onPress={handleShare}
          >
            <Text style={{
              color: theme.primary, // ESTILO: Texto usando a cor primária do tema.
              fontSize: typography.sizes.md,
              fontWeight: '600',
            }}>
              SHARE
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ==================== EXEMPLOS DE CORES ==================== */}
      <View style={{
        padding: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}>
        <Text style={{
          fontSize: typography.sizes.xl,
          fontWeight: '600',
          color: theme.primary,
          marginBottom: spacing.md,
        }}>
          Paleta de Cores
        </Text>
        
        {/* LAÇO DE REPETIÇÃO: Renderiza exemplos de cores da paleta principal (não é um loop 'map', mas uma repetição de estrutura). */}
        <View style={{ gap: spacing.sm }}>
          <View style={{
            flexDirection: 'row',
            gap: spacing.sm,
          }}>
            <View style={{
              flex: 1,
              height: 60,
              borderRadius: 10,
              backgroundColor: theme.primary,
              justifyContent: 'center',
              alignItems: 'center',
              // ESTILO: Aplica sombra para efeito 3D sutil.
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}>
              <Text style={{
                color: '#ffffff',
                fontSize: typography.sizes.xs,
                fontWeight: '600',
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 2,
              }}>
                Primary
              </Text>
            </View>
            <View style={{
              flex: 1,
              height: 60,
              borderRadius: 10,
              backgroundColor: theme.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}>
              <Text style={{
                color: '#ffffff',
                fontSize: typography.sizes.xs,
                fontWeight: '600',
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 2,
              }}>
                Secondary
              </Text>
            </View>
          </View>
          
          <View style={{
            flexDirection: 'row',
            gap: spacing.sm,
          }}>
            <View style={{
              flex: 1,
              height: 60,
              borderRadius: 10,
              backgroundColor: theme.success,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}>
              <Text style={{
                color: '#ffffff',
                fontSize: typography.sizes.xs,
                fontWeight: '600',
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 2,
              }}>
                Success
              </Text>
            </View>
            <View style={{
              flex: 1,
              height: 60,
              borderRadius: 10,
              backgroundColor: theme.error,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
            }}>
              <Text style={{
                color: '#ffffff',
                fontSize: typography.sizes.xs,
                fontWeight: '600',
                textShadowColor: 'rgba(0,0,0,0.5)',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 2,
              }}>
                Error
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* ==================== TEXTO E TIPOGRAFIA ==================== */}
      <View style={{
        padding: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}>
        <Text style={{
          fontSize: typography.sizes.xl,
          fontWeight: '600',
          color: theme.primary,
          marginBottom: spacing.md,
        }}>
          Tipografia
        </Text>
        
        <Text style={{
          fontSize: typography.sizes.heading,
          fontWeight: '600',
          color: theme.text,
          marginBottom: spacing.sm,
        }}>
          Heading Text
        </Text>
        <Text style={{
          fontSize: typography.sizes.md,
          color: theme.text,
          marginBottom: spacing.sm,
          lineHeight: 22,
        }}>
          Body text usando theme.text
        </Text>
        <Text style={{
          fontSize: typography.sizes.md,
          color: theme.textSecondary,
          marginBottom: spacing.sm,
        }}>
          Secondary text usando theme.textSecondary
        </Text>
        <Text style={{
          fontSize: typography.sizes.sm,
          color: theme.textMuted,
          marginBottom: spacing.sm,
        }}>
          Muted text usando theme.textMuted
        </Text>
      </View>

      {/* ==================== FOOTER ==================== */}
      <View style={{
        padding: spacing.lg,
        alignItems: 'center',
        // ESTILO: Fundo com 5% de opacidade da cor primária.
        backgroundColor: addOpacity(theme.primary, 0.05),
      }}>
        <Text style={{
          fontSize: typography.sizes.md,
          color: theme.text,
          textAlign: 'center',
          marginBottom: spacing.sm,
        }}>
          Este é um exemplo de como usar os temas dinâmicos!
        </Text>
        <Text style={{
          fontSize: typography.sizes.sm,
          color: theme.textSecondary,
        }}>
          Tema atual: <Text style={{
            color: theme.primary,
            fontWeight: '600',
          }}>
            {/* LÓGICA: Exibe o nome do tema atual do estado. */}
            {currentTheme}
          </Text>
        </Text>
      </View>

    </ScrollView>
  );
}