// types/community.ts

export interface User {
  id: string;
  name: string;
  avatar: string; // Iniciais para avatar
  level: number;
  rank: string; // "Bronze", "Silver", "Gold", etc.
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string; // URL da imagem (opcional)
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean; // Se o usuário atual curtiu
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
}