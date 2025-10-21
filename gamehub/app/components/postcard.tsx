import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { spacing, typography } from "@/app/constants/styles";
import { Post } from "@/app/types/community";
import ReportButton from "./ReportButton";
import { FontAwesome } from "@expo/vector-icons";

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
}) => {
  const theme = useTheme();

  const getTimeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    if (seconds < 60) return "agora";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}min`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
    return `${Math.floor(seconds / 86400)}d`;
  };

  return (
    <Card>
      <Header>
        <UserSection>
          <Avatar>
            {post.author.avatar.startsWith("http") ? (
              <AvatarImage source={{ uri: post.author.avatar }} />
            ) : (
              <AvatarText>{post.author.avatar}</AvatarText>
            )}
          </Avatar>
          <UserInfo>
            <UserName>{post.author.name}</UserName>
            <MetaInfo>
              Lvl {post.author.level}{" "}
              <FontAwesome name="circle" size={12} color="white" />{" "}
              {post.author.rank}{" "}
              <FontAwesome name="circle" size={12} color="white" />{" "}
              {getTimeAgo(post.timestamp)}
            </MetaInfo>
          </UserInfo>
        </UserSection>

        <ReportButton commentId={post.id} theme={theme} />
      </Header>

      <Content>{post.content}</Content>

      {post.image && (
        <PostImage
          source={typeof post.image === 'string' ? { uri: post.image } : post.image}
          resizeMode="cover"
        />
      )}

      <Stats>
        <StatText>{post.likes} likes</StatText>
        <StatText>
          <FontAwesome name="circle" size={12} color="white" />
        </StatText>
        <StatText>{post.comments} comentários</StatText>
        <StatText>
          <FontAwesome name="circle" size={12} color="white" />
        </StatText>
        <StatText>{post.shares} compartilhamentos</StatText>
      </Stats>

      <Actions>
        <ActionButton onPress={() => onLike(post.id)}>
          <ActionIcon>
            <FontAwesome
              name={post.isLiked ? "heart" : "heart-o"}
              size={20}
              color="white"
            />
          </ActionIcon>
          <ActionText>Like</ActionText>
        </ActionButton>

        <ActionButton onPress={() => onComment(post.id)}>
          <ActionIcon>
            <FontAwesome name="comment-o" size={20} color="white" />
          </ActionIcon>
          <ActionText>Comentar</ActionText>
        </ActionButton>

        <ActionButton onPress={() => onShare(post.id)}>
          <ActionIcon>
            <FontAwesome name="share" size={20} color="white" />
          </ActionIcon>
          <ActionText>Compartilhar</ActionText>
        </ActionButton>
      </Actions>
    </Card>
  );
};

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
  justify-content: space-between;
  margin-bottom: ${spacing.md}px;
`;

const UserSection = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
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

const AvatarImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
`;

const UserInfo = styled.View``;

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
