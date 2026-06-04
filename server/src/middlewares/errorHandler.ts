import { Request, Response, NextFunction } from 'express';

// Catches any error passed via next(err) and returns a clean JSON response
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal server error' });
};