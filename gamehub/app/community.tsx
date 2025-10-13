// community.tsx

import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "./constants/theme";
import { Post } from "./types/community";
import { PostCard } from "./components/postcard";

// ============================================
// DADOS MOCKADOS (simulados)
// ============================================
const MOCK_POSTS: Post[] = [
  {
    id: "1",
    author: {
      id: "user1",
      name: "ShadowGamer",
      avatar: "SG",
      level: 85,
      rank: "Diamante",
    },
    content: "Acabei de zerar Dark Souls pela 10ª vez! Quem mais é viciado nesse jogo? 🎮🔥",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2h atrás
    likes: 42,
    comments: 8,
    shares: 3,
    isLiked: false,
  },
  {
    id: "2",
    author: {
      id: "user2",
      name: "ProGamer99",
      avatar: "PG",
      level: 92,
      rank: "Mestre",
    },
    content: "Alguém quer jogar Valorant agora? Preciso de um time pra ranked!",
    image: "https://picsum.photos/400/300?random=1",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5h atrás
    likes: 15,
    comments: 12,
    shares: 1,
    isLiked: true,
  },
  {
    id: "3",
    author: {
      id: "user3",
      name: "NinjaKiller",
      avatar: "NK",
      level: 73,
      rank: "Platina",
    },
    content: "Setup novo chegou! RTX 4090 + i9-13900K. Agora sim vou dominar! 💻⚡",
    image: "https://picsum.photos/400/300?random=2",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 dia atrás
    likes: 128,
    comments: 34,
    shares: 12,
    isLiked: false,
  },
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function CommunityScreen() {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [newPostText, setNewPostText] = useState("");

  // ========== HANDLERS ==========
  
  const handleLike = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post
      )
    );
  };

  const handleComment = (postId: string) => {
    Alert.alert("Comentar", `Abrindo comentários do post ${postId}`);
  };

  const handleShare = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, shares: post.shares + 1 }
          : post
      )
    );
    Alert.alert("Compartilhado!", "Post compartilhado com sucesso!");
  };

  const handlePublishPost = () => {
    if (newPostText.trim() === "") {
      Alert.alert("Erro", "Digite algo antes de publicar!");
      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: "currentUser",
        name: "Você",
        avatar: "VC",
        level: 50,
        rank: "Ouro",
      },
      content: newPostText,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
    };

    setPosts([newPost, ...posts]); // Adiciona no início
    setNewPostText(""); // Limpa o campo
    Alert.alert("Sucesso!", "Post publicado na comunidade!");
  };

  return (
    <Container>
      {/* HEADER */}
      <Header>
        <HeaderTitle>🌐 Comunidade GameHub</HeaderTitle>
        <HeaderSubtitle>Conecte-se com outros gamers</HeaderSubtitle>
      </Header>

      {/* FORMULÁRIO NOVO POST */}
      <NewPostSection>
        <NewPostInput
          placeholder="Compartilhe algo com a comunidade..."
          placeholderTextColor="#888"
          multiline
          value={newPostText}
          onChangeText={setNewPostText}
          maxLength={500}
        />
        <PublishButton onPress={handlePublishPost}>
          <PublishButtonText>📤 PUBLICAR</PublishButtonText>
        </PublishButton>
      </NewPostSection>

      {/* FEED DE POSTS */}
      <FeedScrollView
        contentContainerStyle={{ paddingBottom: spacing.xl }}
        showsVerticalScrollIndicator={false}
      >
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />
        ))}
      </FeedScrollView>
    </Container>
  );
}

// ============================================
// COMPONENTES ESTILIZADOS
// ============================================

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const Header = styled.View`
  padding: ${spacing.lg}px;
  padding-top: ${spacing.xl}px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: ${typography.sizes.heading}px;
  font-weight: 700;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  margin-bottom: ${spacing.xs}px;
`;

const HeaderSubtitle = styled.Text`
  font-size: ${typography.sizes.sm}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
`;

const NewPostSection = styled.View`
  padding: ${spacing.md}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
`;

const NewPostInput = styled.TextInput`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  border-radius: 12px;
  padding: ${spacing.md}px;
  font-size: ${typography.sizes.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  min-height: 80px;
  margin-bottom: ${spacing.sm}px;
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.border};
`;

const PublishButton = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  padding: ${spacing.sm}px ${spacing.md}px;
  border-radius: 25px;
  align-items: center;
`;

const PublishButtonText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
`;

const FeedScrollView = styled.ScrollView`
  flex: 1;
  padding: ${spacing.md}px;
`;