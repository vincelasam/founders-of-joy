import { Router } from 'express';

export const router = Router();

// Health check — useful to confirm the server is running
router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Auth routes will be added here next