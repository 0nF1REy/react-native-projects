// components/PostCard.tsx

import React from "react";
import { View, Alert } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "../constants/theme";
import { Post } from "../types/community";

// ============================================
// PROPS DO COMPONENTE
// ============================================
interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
}) => {
  // Formatar tempo relativo (ex: "há 2 horas")
  const getTimeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return "agora";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}min`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
    return `${Math.floor(seconds / 86400)}d`;
  };

  return (
    <Card>
      {/* HEADER DO POST */}
      <Header>
        <Avatar>
          <AvatarText>{post.author.avatar}</AvatarText>
        </Avatar>
        
        <UserInfo>
          <UserName>{post.author.name}</UserName>
          <MetaInfo>
            Lvl {post.author.level} • {post.author.rank} • {getTimeAgo(post.timestamp)}
          </MetaInfo>
        </UserInfo>
      </Header>

      {/* CONTEÚDO DO POST */}
      <Content>{post.content}</Content>

      {/* IMAGEM (SE HOUVER) */}
      {post.image && (
        <PostImage source={{ uri: post.image }} resizeMode="cover" />
      )}

      {/* ESTATÍSTICAS */}
      <Stats>
        <StatText>{post.likes} likes</StatText>
        <StatText>•</StatText>
        <StatText>{post.comments} comentários</StatText>
        <StatText>•</StatText>
        <StatText>{post.shares} compartilhamentos</StatText>
      </Stats>

      {/* BOTÕES DE AÇÃO */}
      <Actions>
        <ActionButton onPress={() => onLike(post.id)}>
          <ActionIcon>{post.isLiked ? "❤️" : "🤍"}</ActionIcon>
          <ActionText>Like</ActionText>
        </ActionButton>

        <ActionButton onPress={() => onComment(post.id)}>
          <ActionIcon>💬</ActionIcon>
          <ActionText>Comentar</ActionText>
        </ActionButton>

        <ActionButton onPress={() => onShare(post.id)}>
          <ActionIcon>🔗</ActionIcon>
          <ActionText>Compartilhar</ActionText>
        </ActionButton>
      </Actions>
    </Card>
  );
};

// ============================================
// COMPONENTES ESTILIZADOS
// ============================================

const Card = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.surface};
  border-radius: 15px;
  padding: ${spacing.md}px;
  margin-bottom: ${spacing.md}px;
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.border};
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.md}px;
`;

const Avatar = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  justify-content: center;
  align-items: center;
  margin-right: ${spacing.sm}px;
`;

const AvatarText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
`;

const UserInfo = styled.View`
  flex: 1;
`;

const UserName = styled.Text`
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;

const MetaInfo = styled.Text`
  font-size: ${typography.sizes.xs}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textMuted};
  margin-top: 2px;
`;

const Content = styled.Text`
  font-size: ${typography.sizes.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  line-height: 22px;
  margin-bottom: ${spacing.md}px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin-bottom: ${spacing.md}px;
`;

const Stats = styled.View`
  flex-direction: row;
  gap: ${spacing.xs}px;
  padding-bottom: ${spacing.sm}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
  margin-bottom: ${spacing.sm}px;
`;

const StatText = styled.Text`
  font-size: ${typography.sizes.xs}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textMuted};
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xs}px;
  padding: ${spacing.sm}px;
`;

const ActionIcon = styled.Text`
  font-size: 20px;
`;

const ActionText = styled.Text`
  font-size: ${typography.sizes.sm}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  font-weight: 600;
`;