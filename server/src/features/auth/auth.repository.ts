import { pool } from '../../config/db';
import { User } from '../../types/user';

// Returns the full row including password_hash — only used internally by the service
export const findUserByEmail = async (email: string) => {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return (rows as any[])[0] as (User & { password_hash: string }) | undefined;
};

export const createUser = async (
  name: string,
  email: string,
  passwordHash: string,
  avatarInitials: string
): Promise<number> => {
  const [result] = await pool.execute(
    'INSERT INTO users (name, email, password_hash, avatar_initials) VALUES (?, ?, ?, ?)',
    [name, email, passwordHash, avatarInitials]
  );
  return (result as any).insertId;
};

export const findUserById = async (id: number): Promise<User | undefined> => {
  const [rows] = await pool.execute(
    'SELECT id, name, email, bio, avatar_url, avatar_initials, created_at FROM users WHERE id = ?',
    [id]
  );
  return (rows as any[])[0] as User | undefined;
};