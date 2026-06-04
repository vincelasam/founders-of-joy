'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { loginUser, registerUser } from '@/services/authService';

export const useAuthActions = () => {
  const { saveAuth, logout } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { token, user } = await loginUser(email, password);
      saveAuth(token, user);
      router.push('/feed');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { token, user } = await registerUser(name, email, password);
      saveAuth(token, user);
      router.push('/feed');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return { login, register, logout: handleLogout, error, isLoading };
};