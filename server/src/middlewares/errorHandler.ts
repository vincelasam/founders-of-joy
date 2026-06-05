import { Request, Response, NextFunction } from 'express';

// Catches any error passed via next(err) and returns a clean JSON response
export const errorHandler = (
  err: any, // Cast to any to read custom properties
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err.stack);
  
  // ✅ Dynamically extract the status code or default to 500
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message || 'Internal server error' });
};