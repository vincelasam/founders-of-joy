import {
  findPaginatedPosts,
  createPost,
  findPostById,
  findReaction,
  insertReaction,
  deleteReaction,
  insertComment,
  findCommentsByPostId,
} from './posts.repository';

const FEED_PAGE_SIZE = 10;

// ─── Posts ────────────────────────────────────────────────────────────────────

export const getPaginatedFeed = async (
  requestingUserId: number,
  page: number
) => {
  const limit = FEED_PAGE_SIZE;
  const offset = (page - 1) * limit;
  const posts = await findPaginatedPosts(requestingUserId, limit, offset);
  return {
    posts,
    page,
    pageSize: limit,
    hasMore: posts.length === limit,
  };
};

export const createNewPost = async (
  userId: number,
  content: string,
  privacy: string
) => {
  if (!content?.trim()) {
    throw Object.assign(new Error('Content is required'), { statusCode: 400 });
  }
  const allowed = ['public', 'friends', 'private'];
  if (!allowed.includes(privacy)) {
    throw Object.assign(new Error('Invalid privacy value'), { statusCode: 400 });
  }
  const insertId = await createPost(userId, content.trim(), privacy);
  return { id: insertId };
};

// ─── Reactions ────────────────────────────────────────────────────────────────

export const toggleReaction = async (postId: number, userId: number) => {
  const post = await findPostById(postId);
  if (!post) {
    throw Object.assign(new Error('Post not found'), { statusCode: 404 });
  }

  const existing = await findReaction(postId, userId);

  if (existing) {
    await deleteReaction(postId, userId);
    return { liked: false };
  } else {
    await insertReaction(postId, userId);
    return { liked: true };
  }
};

// ─── Comments ─────────────────────────────────────────────────────────────────

export const addComment = async (
  postId: number,
  userId: number,
  content: string
) => {
  if (!content?.trim()) {
    throw Object.assign(new Error('Comment content is required'), { statusCode: 400 });
  }
  const post = await findPostById(postId);
  if (!post) {
    throw Object.assign(new Error('Post not found'), { statusCode: 404 });
  }
  const insertId = await insertComment(postId, userId, content.trim());
  return { id: insertId };
};

export const getComments = async (postId: number) => {
  const post = await findPostById(postId);
  if (!post) {
    throw Object.assign(new Error('Post not found'), { statusCode: 404 });
  }
  return findCommentsByPostId(postId);
};