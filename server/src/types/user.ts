export interface User {
  id: number;
  name: string;
  email: string;
  bio: string | null;
  avatar_url: string | null;
  avatar_initials: string | null;
  created_at: Date;
}

// What we attach to req after JWT verification
export interface AuthPayload {
  id: number;
  email: string;
}