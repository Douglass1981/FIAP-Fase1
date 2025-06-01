import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error('Variável de ambiente inválida. Corrija o .env');
}

export const env = parsed.data;