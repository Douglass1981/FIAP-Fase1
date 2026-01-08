import { defineConfig } from '@prisma/config';

export default defineConfig({
  // Define o caminho para o seu arquivo de schema
  schema: 'prisma/schema.prisma',
  
//   migration: {
//     // Define a URL de conexão para as migrações (npx prisma migrate)
//     connectionUrl: process.env.DATABASE_URL,
//   },
});