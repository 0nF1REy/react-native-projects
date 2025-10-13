// components/CommentSection.tsx

import React, { useState } from "react";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "../constants/theme";
import { Comment } from "../types/community";

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
  onAddComment: (postId: string, content: string) => void;
}

export const CommentSection: React.FC<CommentSectionProps> = ({
  postId,
  comments,
  onAddComment,
}) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = () => {
    if (commentText.trim() === "") return;
    onAddComment(postId, commentText);
    setCommentText("");
  };

  return (
    <Container>
      <Title>💬 Comentários ({comments.length})</Title>

      {/* LISTA DE COMENTÁRIOS */}
      {comments.map((comment) => (
        <CommentCard key={comment.id}>
          <CommentAvatar>
            <AvatarText>{comment.author.avatar}</AvatarText>
          </CommentAvatar>
          <CommentContent>
            <CommentAuthor>{comment.author.name}</CommentAuthor>
            <CommentText>{comment.content}</CommentText>
          </CommentContent>
        </CommentCard>
      ))}

      {/* CAMPO PARA NOVO COMENTÁRIO */}
      <InputContainer>
        <CommentInput
          placeholder="Escreva um comentário..."
          value={commentText}
          onChangeText={setCommentText}
        />
        <SendButton onPress={handleSubmit}>
          <SendButtonText>➤</SendButtonText>
        </SendButton>
      </InputContainer>
    </Container>
  );
};

// Estilos...
const Container = styled.View`
  padding: ${spacing.md}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.surface};
`;

const Title = styled.Text`
  font-size: ${typography.sizes.lg}px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  margin-bottom: ${spacing.md}px;
`;

const CommentCard = styled.View`
  flex-direction: row;
  margin-bottom: ${spacing.md}px;
`;

const CommentAvatar = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  justify-content: center;
  align-items: center;
  margin-right: ${spacing.sm}px;
`;

const AvatarText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  font-size: ${typography.sizes.sm}px;
  font-weight: 600;
`;

const CommentContent = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  padding: ${spacing.sm}px;
  border-radius: 12px;
`;

const CommentAuthor = styled.Text`
  font-size: ${typography.sizes.sm}px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  margin-bottom: 4px;
`;

const CommentText = styled.Text`
  font-size: ${typography.sizes.sm}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
`;

const InputContainer = styled.View`
  flex-direction: row;
  gap: ${spacing.sm}px;
`;

const CommentInput = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  border-radius: 20px;
  padding: ${spacing.sm}px ${spacing.md}px;
  font-size: ${typography.sizes.sm}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;

const SendButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  justify-content: center;
  align-items: center;
`;

const SendButtonText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  font-size: 18px;
`;