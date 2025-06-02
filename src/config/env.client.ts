import { z } from 'zod';

const schema = z.object({
  NEXT_PUBLIC_MOCK_BASE_URL: z.string().url(),
});

const parsed = schema.safeParse({
  NEXT_PUBLIC_MOCK_BASE_URL: process.env.NEXT_PUBLIC_MOCK_BASE_URL,
});

if (!parsed.success) {
  throw new Error('Variável de ambiente inválida no cliente');
}

export const clientEnv = parsed.data;
