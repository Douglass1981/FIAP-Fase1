// src/app/lib/__mocks__/prisma.ts

// Simula o PrismaClient para testes ou desenvolvimento sem banco de dados
const mockPrisma = {
  // Mock para o modelo 'usuario'
  usuario: {
    findUnique: async ({ where }: { where: { email: string } }) => {
      // Simula um usuário para login
      if (where.email === 'teste@email.com') {
        // ATENÇÃO: Em um mock real, você não teria uma senha em texto puro aqui.
        // Isso é apenas para simular o comportamento de bcrypt.compare.
        // A senha 'senha123' abaixo seria o hash de 'senha123'.
        return {
          id: 'user-mock-123',
          email: 'teste@email.com',
          password: '$2b$12$yk6nisSx67kudVciNF6GzOJ5eoixq7E.Rqo9sQnTO4BIhKN61Vg3u', // Um hash válido para 'senha123'
          nome: 'Usuário Mock',
          // ... outras propriedades do usuário
        };
      }
      return null; // Usuário não encontrado
    },
    // Adicione outros métodos se forem usados em outras rotas/componentes, ex:
    // findMany: async () => ([ /* ...mock de usuários */ ]),
    // create: async (data) => ({ id: 'new-user-mock', ...data }),
  },

  // Mock para o modelo 'categorias'
  categorias: {
    findMany: async ({ orderBy }: { orderBy?: { nome?: 'asc' | 'desc' } }) => {
      // Simula algumas categorias
      const mockCategorias = [
        { id: 'cat1', nome: '' },
        { id: 'cat2', nome: 'Transporte' },
        { id: 'cat3', nome: 'Moradia' },
        { id: 'cat4', nome: 'Lazer' },
        { id: 'cat5', nome: 'Alimentação' },
      ];

      if (orderBy?.nome === 'asc') {
        return mockCategorias.sort((a, b) => a.nome.localeCompare(b.nome));
      } else if (orderBy?.nome === 'desc') {
        return mockCategorias.sort((a, b) => b.nome.localeCompare(a.nome));
      }
      return mockCategorias;
    },
    // Adicione outros métodos se usados
    // create: async (data) => ({ id: 'new-cat-mock', ...data }),
  },

    banco: {
    findMany: async (p0: { orderBy: { nome: string; }; }) => {
      // Retorne um array de objetos que simulem seus bancos
      return [
        { id: 'bank1', nome: ' ' },
        { id: 'bank2', nome: 'Itaú Unibanco' },
        { id: 'bank3', nome: 'Santander' },
        { id: 'bank4', nome: 'Bradesco' },
        { id: 'bank5', nome: 'Nubank' },
        { id: 'bank5', nome: 'Caixa' },
      ];
    },
    // Se você tiver outros métodos (create, findUnique, etc.) para 'bancos', adicione-os aqui também
    // findUnique: async ({ where }) => { /* ... */ },
    // create: async (data) => { /* ... */ },
  },
};

export default mockPrisma;