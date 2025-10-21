import React, { useState } from "react";
import { Alert, View } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "@/app/constants/styles";
import { Post } from "@/app/types/community";
import { CommentSection } from "@/app/components/commentsection";
import { PostCard } from "@/app/components/postcard";
import { FontAwesome } from "@expo/vector-icons";

type PostWithComments = Post & { commentsList?: any[] };
const MOCK_POSTS: PostWithComments[] = [
  {
    id: "1",
    author: {
      id: "user1",
      name: "ShadowGamer",
      avatar: "https://i.pravatar.cc/290",
      level: 85,
      rank: "Diamante",
    },
    content:
      "Acabei de zerar Dark Souls pela 10ª vez! Quem mais é viciado nesse jogo?",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 42,
    comments: 8,
    shares: 3,
    isLiked: false,
    commentsList: [],
  },
  {
    id: "2",
    author: {
      id: "user2",
      name: "ProGamer99",
      avatar: "https://i.pravatar.cc/291",
      level: 92,
      rank: "Mestre",
    },
    content: "Alguém quer jogar Valorant agora? Preciso de um time pra ranked!",
    image: require("../assets/images/community/01.png"),
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 15,
    comments: 12,
    shares: 1,
    isLiked: true,
    commentsList: [],
  },
  {
    id: "3",
    author: {
      id: "user3",
      name: "NinjaKiller",
      avatar: "https://i.pravatar.cc/293",
      level: 73,
      rank: "Platina",
    },
    content: "Setup novo chegou! RTX 4090 + i9-13900K. Agora sim vou dominar!",
    image: require("../assets/images/community/02.jpg"),
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    likes: 128,
    comments: 34,
    shares: 12,
    isLiked: false,
    commentsList: [],
  },
];

export default function CommunityScreen() {
  const [posts, setPosts] = useState<PostWithComments[]>(MOCK_POSTS);
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [newPostText, setNewPostText] = useState("");

  const user = {
    id: "currentUser",
    name: "Você",
    avatar: `https://i.pravatar.cc/300`,
    level: 50,
    rank: "Ouro",
  };

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
    setActivePostId(postId);
  };

  const handleAddComment = (postId: string, content: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              commentsList: [
                ...(post.commentsList || []),
                {
                  id: Date.now().toString(),
                  author: user,
                  content,
                  timestamp: new Date(),
                },
              ],
              comments: (post.comments || 0) + 1,
            }
          : post
      )
    );
  };

  const handleShare = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
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
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        level: user.level,
        rank: user.rank,
      },
      content: newPostText,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
    };

    setPosts([newPost, ...posts]);
    setNewPostText("");
    Alert.alert("Sucesso!", "Post publicado na comunidade!");
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Comunidade</HeaderTitle>
        <HeaderSubtitle>Conecte-se com outros gamers</HeaderSubtitle>
      </Header>

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
          <PublishButtonText>
            <FontAwesome name="send" size={16} color="white" /> PUBLICAR
          </PublishButtonText>
        </PublishButton>
      </NewPostSection>

      <FeedScrollView
        contentContainerStyle={{ paddingBottom: spacing.xl }}
        showsVerticalScrollIndicator={false}
      >
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <PostCard
              post={post}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
            />
            {activePostId === post.id && (
              <View style={{ marginLeft: 40 }}>
                <CommentSection
                  postId={post.id}
                  comments={post.commentsList || []}
                  onAddComment={handleAddComment}
                />
              </View>
            )}
          </React.Fragment>
        ))}
      </FeedScrollView>
    </Container>
  );
}

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
