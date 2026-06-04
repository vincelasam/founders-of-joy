import { Router } from 'express';
import { authRouter } from '../features/auth/auth.routes';

export const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

router.use('/auth', authRouter);