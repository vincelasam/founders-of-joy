export interface User {
  id: number;
  name: string;
  email: string;
  bio: string | null;
  avatar_url: string | null;
  avatar_initials: string | null;
  created_at: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}