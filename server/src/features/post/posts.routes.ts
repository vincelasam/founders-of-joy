import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import {
  getFeed,
  createPost,
  toggleReaction,
  addComment,
  getComments,
} from './posts.controller';

export const postRouter = Router();

// Public-ish (still needs auth so we know who's asking for user_has_reacted)
postRouter.get('/',               authMiddleware, getFeed);

// Protected — must be logged in to post, react, or comment
postRouter.post('/',              authMiddleware, createPost);
postRouter.post('/:id/reactions', authMiddleware, toggleReaction);
postRouter.post('/:id/comments',  authMiddleware, addComment);
postRouter.get( '/:id/comments',  authMiddleware, getComments);