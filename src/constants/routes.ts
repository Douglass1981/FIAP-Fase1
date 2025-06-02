import { env } from "@/config/env";

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
    MOCK: env.MOCK_BASE_URL,
  }
} as const;