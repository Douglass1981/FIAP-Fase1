import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string().url(),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  throw new Error('Variável de ambiente inválida no servidor');
}

export const serverEnv = parsed.data;
