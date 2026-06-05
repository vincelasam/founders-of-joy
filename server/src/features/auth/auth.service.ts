import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as AuthRepository from './auth.repository';
import { AuthPayload } from '../src/types/user';

const SALT_ROUNDS = 12;

const signToken = (payload: AuthPayload): string => {
  return jwt.sign({ ...payload }, process.env.JWT_SECRET as string, {
    expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as any,
  });
};

export const register = async (name: string, email: string, password: string) => {
  const existing = await AuthRepository.findUserByEmail(email);
  if (existing) {
  throw Object.assign(new Error('Email already in use'), { statusCode: 409 });
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  // e.g. "Juan Dela Cruz" → "JD"
  const avatarInitials = name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join('');

  const userId = await AuthRepository.createUser(name, email, passwordHash, avatarInitials);
  const user = await AuthRepository.findUserById(userId);

  const token = signToken({ id: userId, email });
  return { token, user };
};

export const login = async (email: string, password: string) => {
  const user = await AuthRepository.findUserByEmail(email);
  if (!user) {
  throw Object.assign(new Error('Invalid email or password'), { statusCode: 401 });
}
const isMatch = await bcrypt.compare(password, user.password_hash);
if (!isMatch) {
  throw Object.assign(new Error('Invalid email or password'), { statusCode: 401 });
}
  // Never send password_hash to the client
  const { password_hash, ...safeUser } = user;

  const token = signToken({ id: user.id, email });
  return { token, user: safeUser };
};