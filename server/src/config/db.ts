import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Connection pool — reuses connections instead of opening a new one per query
export const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  port:     Number(process.env.DB_PORT),
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});