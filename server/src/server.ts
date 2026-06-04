import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';
import { pool } from './config/db';

const PORT = process.env.PORT || 5000;

const start = async () => {
  // Verify DB connection before accepting traffic
  await pool.getConnection();
  console.log('✅ MySQL connected');

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

start().catch((err) => {
  console.error('❌ Failed to start server:', err.message);
  process.exit(1);
});