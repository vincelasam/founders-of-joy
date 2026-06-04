export interface Post {
  id: number;
  user_id: number;
  circle_id: number | null;
  content: string;
  privacy: 'public' | 'circle' | 'followers';
  created_at: string;
  author: Pick<User, 'id' | 'name' | 'avatar_url' | 'avatar_initials'>;
  reaction_count: number;
  comment_count: number;
  user_has_reacted: boolean;
}

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  content: string;
  created_at: string;
  author: Pick<User, 'id' | 'name' | 'avatar_url' | 'avatar_initials'>;
}

import { User } from './user';