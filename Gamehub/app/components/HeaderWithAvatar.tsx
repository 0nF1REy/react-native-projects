// ============================================
// HEADER COM AVATAR - COMPONENTE PARA GAMEHUB
// ============================================
// Este componente cria um cabeçalho personalizado com:
// - Avatar circular do usuário com inicial do nome
// - Saudação personalizada
// - Contador de notificações com badge
// - Totalmente responsivo e temático

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme'; // Hook para pegar tema atual

// ============================================
// TIPAGEM DAS PROPS (INTERFACE TYPESCRIPT)
// ============================================
interface HeaderWithAvatarProps {
  userName?: string;                    // Nome do usuário (opcional)
  notifications?: number;               // Número de notificações (opcional)
  onAvatarPress?: () => void;          // Função para clique no avatar (opcional)
  onNotificationPress?: () => void;    // Função para clique nas notificações (opcional)
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
const HeaderWithAvatar: React.FC<HeaderWithAvatarProps> = ({ 
  // Props com valores padrão para facilitar uso
  userName = "Gamer",           // Nome do usuário (pega primeira letra para avatar)
  notifications = 3,            // Número de notificações não lidas
  onAvatarPress,               // Função chamada ao clicar no avatar/nome
  onNotificationPress          // Função chamada ao clicar nas notificações
}) => {
  
  // ============================================
  // HOOKS E ESTADO
  // ============================================
  const { theme } = useTheme();    // Pega o tema atual (cores dinâmicas)
  const styles = createStyles(theme);  // Cria estilos baseados no tema
  
  // ============================================
  // FUNÇÕES INTERNAS (HANDLERS)
  // ============================================
  
  // Handler para clique no avatar (com verificação se função existe)
  const handleAvatarPress = (): void => {
    if (onAvatarPress && typeof onAvatarPress === 'function') {
      onAvatarPress();
    }
  };
  
  // Handler para clique nas notificações (com verificação se função existe)
  const handleNotificationPress = (): void => {
    if (onNotificationPress && typeof onNotificationPress === 'function') {
      onNotificationPress();
    }
  };
  
  // ============================================
  // RENDERIZAÇÃO DO COMPONENTE
  // ============================================
  return (
    <View style={styles.container}>
      
      {/* ========================================
          SEÇÃO ESQUERDA - AVATAR E SAUDAÇÃO
          ======================================== */}
      <TouchableOpacity 
        style={styles.avatarSection} 
        onPress={handleAvatarPress}  // Usa o handler que verifica se função existe
        activeOpacity={0.7}          // Feedback visual ao tocar
        disabled={!onAvatarPress}    // Desabilita se não há função
      >
        {/* Avatar circular com inicial do nome */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {userName && userName.length > 0 ? userName[0].toUpperCase() : 'G'}
          </Text>
        </View>
        
        {/* Textos de saudação */}
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </TouchableOpacity>
      
      {/* ========================================
          SEÇÃO DIREITA - NOTIFICAÇÕES
          ======================================== */}
      <TouchableOpacity 
        style={styles.notificationContainer} 
        onPress={handleNotificationPress}  // Usa o handler que verifica se função existe
        activeOpacity={0.7}                // Feedback visual
        disabled={!onNotificationPress}    // Desabilita se não há função
      >
        <View style={styles.notificationIcon}>
          <Text style={styles.bellIcon}>🔔</Text>  {/* Ícone do sino */}
          
          {/* Badge de notificações (só aparece se houver notificações) */}
          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {notifications > 9 ? '9+' : notifications.toString()}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// ============================================
// CRIAÇÃO DOS ESTILOS DINÂMICOS
// ============================================
// Esta função recebe o tema atual e retorna estilos personalizados
const createStyles = (theme: any) => StyleSheet.create({
  
  // ========================================
  // CONTAINER PRINCIPAL
  // ========================================
  container: {
    flexDirection: 'row',           // Alinha horizontalmente
    justifyContent: 'space-between', // Avatar à esquerda, notificações à direita
    alignItems: 'center',           // Centraliza verticalmente
    paddingHorizontal: 20,          // Margem lateral
    paddingTop: 50,                 // Espaço para status bar do celular
    paddingBottom: 20,              // Espaço inferior
    backgroundColor: theme.surface,  // Cor de fundo do tema
  },
  
  // ========================================
  // SEÇÃO DO AVATAR (ESQUERDA)
  // ========================================
  avatarSection: {
    flexDirection: 'row',    // Avatar e texto lado a lado
    alignItems: 'center',    // Alinha verticalmente
    opacity: 1,              // Mantém opacidade normal quando habilitado
  },
  
  // Avatar circular
  avatar: {
    width: 45,                      // Largura fixa
    height: 45,                     // Altura fixa (quadrado)
    borderRadius: 22.5,             // Metade da width/height = círculo perfeito
    backgroundColor: theme.primary,  // Cor principal do tema
    justifyContent: 'center',       // Centraliza letra verticalmente
    alignItems: 'center',           // Centraliza letra horizontalmente
    marginRight: 12,                // Espaço entre avatar e texto
  },
  
  // Letra dentro do avatar
  avatarText: {
    color: theme.background,  // Cor contrasta com o fundo do avatar
    fontSize: 18,            // Tamanho da fonte
    fontWeight: 'bold',      // Texto em negrito
  },
  
  // Texto "Olá,"
  greeting: {
    color: theme.textSecondary,  // Cor mais suave (cinza)
    fontSize: 14,               // Fonte menor que o nome
  },
  
  // Nome do usuário
  userName: {
    color: theme.text,      // Cor principal do texto
    fontSize: 16,          // Fonte maior que a saudação
    fontWeight: 'bold',    // Destaque em negrito
  },
  
  // ========================================
  // SEÇÃO DAS NOTIFICAÇÕES (DIREITA)
  // ========================================
  notificationContainer: {
    position: 'relative',  // Permite posicionamento absoluto do badge
    opacity: 1,           // Mantém opacidade normal quando habilitado
  },
  
  // Círculo do ícone de notificação
  notificationIcon: {
    width: 40,                           // Largura fixa
    height: 40,                          // Altura fixa (círculo)
    justifyContent: 'center',            // Centraliza ícone verticalmente
    alignItems: 'center',                // Centraliza ícone horizontalmente
    backgroundColor: theme.primary + '20', // Cor primária com 20% transparência
    borderRadius: 20,                    // Metade da width/height = círculo
  },
  
  // Emoji do sino
  bellIcon: {
    fontSize: 18,  // Tamanho do emoji
  },
  
  // ========================================
  // BADGE DE NOTIFICAÇÕES
  // ========================================
  badge: {
    position: 'absolute',        // Posicionamento sobre o ícone
    top: -5,                    // 5px acima do ícone
    right: -5,                  // 5px à direita do ícone
    backgroundColor: theme.error, // Cor vermelha para chamar atenção
    borderRadius: 10,           // Círculo pequeno
    minWidth: 20,              // Largura mínima
    height: 20,                // Altura fixa
    justifyContent: 'center',   // Centraliza número verticalmente
    alignItems: 'center',       // Centraliza número horizontalmente
  },
  
  // Texto do número de notificações
  badgeText: {
    color: theme.text,    // Cor do texto (branco ou escuro dependendo do tema)
    fontSize: 12,        // Fonte pequena para caber no badge
    fontWeight: 'bold',  // Negrito para visibilidade
  },
});

// ============================================
// EXPORTAÇÃO DO COMPONENTE
// ============================================
export default HeaderWithAvatar;

// ============================================
// EXEMPLO DE USO CORRIGIDO
// ============================================
/*

// IMPORTAÇÃO
import HeaderWithAvatar from './components/headers/HeaderWithAvatar';

// USO BÁSICO (sem funções - não dá erro)
<HeaderWithAvatar 
  userName="João"
  notifications={5}
/>

// USO COMPLETO (com todas as funções tipadas)
<HeaderWithAvatar 
  userName="João Gamer"
  notifications={7}
  onAvatarPress={() => {
    console.log('Avatar clicado!');
    // navigation.navigate('Profile');
  }}
  onNotificationPress={() => {
    console.log('Notificações clicadas!');
    // navigation.navigate('Notifications');
  }}
/>

// USO COM FUNÇÕES CONDICIONAIS
const handleAvatarClick = (): void => {
  console.log('Perfil aberto');
};

const handleNotifications = (): void => {
  console.log('Notificações abertas');
};

<HeaderWithAvatar 
  userName="Maria"
  notifications={0}
  onAvatarPress={handleAvatarClick}
  onNotificationPress={handleNotifications}
/>

*/

// ============================================
// CORREÇÕES APLICADAS PARA TYPESCRIPT
// ============================================
/*

1. INTERFACE DEFINIDA:
   - Props tipadas corretamente
   - Funções como () => void
   - Props opcionais com ?

2. HANDLERS INTERNOS:
   - Verificam se função existe antes de chamar
   - Evitam erro de 'any' type

3. VALIDAÇÕES:
   - userName verificado antes de acessar [0]
   - notifications convertido para string
   - disabled quando não há função

4. TYPESCRIPT FRIENDLY:
   - React.FC<Props> especificado
   - Tipos explícitos onde necessário
   - Sem uso de 'any' nas props

AGORA NÃO HAVERÁ MAIS ERROS DE TYPESCRIPT! ✅

*/