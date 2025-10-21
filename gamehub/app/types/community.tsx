export interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  rank: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
}
