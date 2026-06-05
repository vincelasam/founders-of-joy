import { Request, Response, NextFunction } from 'express';
import * as postService from './posts.service';

// GET /api/posts?page=1
export const getFeed = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const userId = req.user!.id;
    const result = await postService.getPaginatedFeed(userId, page);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// POST /api/posts
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { content, privacy = 'public' } = req.body;
    const userId = req.user!.id;
    const result = await postService.createNewPost(userId, content, privacy);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

// POST /api/posts/:id/reactions
export const toggleReaction = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const postId = parseInt(req.params.id as string);

    if (isNaN(postId)) {
      res.status(400).json({ message: 'Invalid post ID' });
      return; 
    }
    
    const userId = req.user!.id;
    const result = await postService.toggleReaction(postId, userId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// POST /api/posts/:id/comments
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const postId = parseInt(req.params.id as string);
    const userId = req.user!.id;
    const { content } = req.body;
    const result = await postService.addComment(postId, userId, content);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

// GET /api/posts/:id/comments
export const getComments = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const postId = parseInt(req.params.id as string);
    const comments = await postService.getComments(postId);
    res.json({ comments });
  } catch (err) {
    next(err);
  }
};