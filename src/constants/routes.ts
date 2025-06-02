import { clientEnv } from '@/config/env.client';

export const ROUTES = {
  DEFAULT: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  LOGIN: '/login',
  SIGNUP: '/signup',
  HOME: '/home',
  DASHBOARD: '/dashboard',
  TRANSACTIONS: '/transactions',
  BACKEND: {
    MOCK: clientEnv.NEXT_PUBLIC_MOCK_BASE_URL,
  },
} as const;
