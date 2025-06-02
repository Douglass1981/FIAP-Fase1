import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  MOCK_BASE_URL: z.string().url().default('http://localhost:3001')
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error('Variável de ambiente inválida. Corrija o .env');
}

export const env = parsed.data;