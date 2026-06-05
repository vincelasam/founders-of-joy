export interface Post {
  id: number;
  user_id: number;
  circle_id: number | null;
  content: string;
  privacy: 'public' | 'circle' | 'followers';
  created_at: string;
  reaction_count: number;
  comment_count: number;
  user_has_reacted: boolean;
  
  // Flat fields from your MySQL JOIN
  author_name: string;
  author_avatar_url: string | null;
  author_avatar_initials: string | null;
}

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  content: string;
  created_at: string;
  
  // Flat fields from your MySQL JOIN
  author_name: string;
  author_avatar_url: string | null;
  author_avatar_initials: string | null;
}