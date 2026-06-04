import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import { errorHandler } from './middlewares/errorHandler';

export const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// All routes mounted under /api
app.use('/api', router);

// Global error handler — must be last
app.use(errorHandler);