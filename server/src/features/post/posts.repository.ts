import { pool } from '../../config/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export interface PostRow extends RowDataPacket {
  id: number;
  user_id: number;
  content: string;
  privacy: 'public' | 'friends' | 'private';
  created_at: Date;
  author_name: string;
  author_avatar_url: string | null;
  author_avatar_initials: string | null;
  reaction_count: number;
  comment_count: number;
  user_has_reacted: 0 | 1;
}

export interface CommentRow extends RowDataPacket {
  id: number;
  post_id: number;
  user_id: number;
  content: string;
  created_at: Date;
  author_name: string;
  author_avatar_url: string | null;
  author_avatar_initials: string | null;
}

export interface ReactionRow extends RowDataPacket {
  id: number;
  post_id: number;
  user_id: number;
  type: string;
}

// ─── Posts ────────────────────────────────────────────────────────────────────

export const findPaginatedPosts = async (
  requestingUserId: number,
  limit: number,
  offset: number
): Promise<PostRow[]> => {
  const [rows] = await pool.execute<PostRow[]>(
    `SELECT
       p.id,
       p.user_id,
       p.content,
       p.privacy,
       p.created_at,
       u.name            AS author_name,
       u.avatar_url      AS author_avatar_url,
       u.avatar_initials AS author_avatar_initials,
       COUNT(DISTINCT r.id)                              AS reaction_count,
       COUNT(DISTINCT c.id)                              AS comment_count,
       EXISTS (
         SELECT 1 FROM reactions r2
         WHERE r2.post_id = p.id AND r2.user_id = ?
       )                                                 AS user_has_reacted
     FROM posts p
     JOIN users u ON u.id = p.user_id
     LEFT JOIN reactions r ON r.post_id = p.id
     LEFT JOIN comments c  ON c.post_id = p.id
     WHERE p.privacy = 'public'
     GROUP BY p.id, u.name, u.avatar_url, u.avatar_initials
     ORDER BY p.created_at DESC
     LIMIT ? OFFSET ?`,
    [requestingUserId, limit, offset]
  );
  return rows;
};

export const createPost = async (
  userId: number,
  content: string,
  privacy: string
): Promise<number> => {
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO posts (user_id, content, privacy) VALUES (?, ?, ?)`,
    [userId, content, privacy]
  );
  return result.insertId;
};

export const findPostById = async (postId: number): Promise<PostRow | null> => {
  const [rows] = await pool.execute<PostRow[]>(
    `SELECT p.*, u.name AS author_name
     FROM posts p
     JOIN users u ON u.id = p.user_id
     WHERE p.id = ?`,
    [postId]
  );
  return rows[0] ?? null;
};

// ─── Reactions ────────────────────────────────────────────────────────────────

export const findReaction = async (
  postId: number,
  userId: number
): Promise<ReactionRow | null> => {
  const [rows] = await pool.execute<ReactionRow[]>(
    `SELECT * FROM reactions WHERE post_id = ? AND user_id = ?`,
    [postId, userId]
  );
  return rows[0] ?? null;
};

export const insertReaction = async (
  postId: number,
  userId: number
): Promise<void> => {
  await pool.execute(
    `INSERT INTO reactions (post_id, user_id, type) VALUES (?, ?, 'like')`,
    [postId, userId]
  );
};

export const deleteReaction = async (
  postId: number,
  userId: number
): Promise<void> => {
  await pool.execute(
    `DELETE FROM reactions WHERE post_id = ? AND user_id = ?`,
    [postId, userId]
  );
};

// ─── Comments ─────────────────────────────────────────────────────────────────

export const insertComment = async (
  postId: number,
  userId: number,
  content: string
): Promise<number> => {
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)`,
    [postId, userId, content]
  );
  return result.insertId;
};

export const findCommentsByPostId = async (
  postId: number
): Promise<CommentRow[]> => {
  const [rows] = await pool.execute<CommentRow[]>(
    `SELECT
       c.id,
       c.post_id,
       c.user_id,
       c.content,
       c.created_at,
       u.name            AS author_name,
       u.avatar_url      AS author_avatar_url,
       u.avatar_initials AS author_avatar_initials
     FROM comments c
     JOIN users u ON u.id = c.user_id
     WHERE c.post_id = ?
     ORDER BY c.created_at ASC`,
    [postId]
  );
  return rows;
};