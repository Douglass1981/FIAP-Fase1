// // src/app/lib/__mocks__/prisma.ts

// // Simula o PrismaClient para testes ou desenvolvimento sem banco de dados
// const mockPrisma = {
//   // Mock para o modelo 'usuario'
//   usuario: {
//     findUnique: async ({ where }: { where: { email: string } }) => {
//       // Simula um usuário para login
//       if (where.email === 'teste@email.com') {
//         // ATENÇÃO: Em um mock real, você não teria uma senha em texto puro aqui.
//         // Isso é apenas para simular o comportamento de bcrypt.compare.
//         // A senha 'senha123' abaixo seria o hash de 'senha123'.
//         return {
//           id: 'user-mock-123',
//           email: 'teste@email.com',
//           password: '$2b$12$yk6nisSx67kudVciNF6GzOJ5eoixq7E.Rqo9sQnTO4BIhKN61Vg3u', // Um hash válido para 'senha123'
//           nome: 'Usuário Mock',
//           // ... outras propriedades do usuário
//         };
//       }
//       return null; // Usuário não encontrado
//     },
//     // Adicione outros métodos se forem usados em outras rotas/componentes, ex:
//     // findMany: async () => ([ /* ...mock de usuários */ ]),
//     // create: async (data) => ({ id: 'new-user-mock', ...data }),
//   },

//   // Mock para o modelo 'categorias'
//   categorias: {
//     findMany: async ({ orderBy }: { orderBy?: { nome?: 'asc' | 'desc' } }) => {
//       // Simula algumas categorias
//       const mockCategorias = [
//         { id: 'cat1', nome: '' },
//         { id: 'cat2', nome: 'Transporte' },
//         { id: 'cat3', nome: 'Moradia' },
//         { id: 'cat4', nome: 'Lazer' },
//         { id: 'cat5', nome: 'Alimentação' },
//       ];

//       if (orderBy?.nome === 'asc') {
//         return mockCategorias.sort((a, b) => a.nome.localeCompare(b.nome));
//       } else if (orderBy?.nome === 'desc') {
//         return mockCategorias.sort((a, b) => b.nome.localeCompare(a.nome));
//       }
//       return mockCategorias;
//     },
//     // Adicione outros métodos se usados
//     // create: async (data) => ({ id: 'new-cat-mock', ...data }),
//   },

//     banco: {
//     findMany: async (p0: { orderBy: { nome: string; }; }) => {
//       // Retorne um array de objetos que simulem seus bancos
//       return [
//         { id: 'bank1', nome: ' ' },
//         { id: 'bank2', nome: 'Itaú Unibanco' },
//         { id: 'bank3', nome: 'Santander' },
//         { id: 'bank4', nome: 'Bradesco' },
//         { id: 'bank5', nome: 'Nubank' },
//         { id: 'bank5', nome: 'Caixa' },
//       ];
//     },
//     // Se você tiver outros métodos (create, findUnique, etc.) para 'bancos', adicione-os aqui também
//     // findUnique: async ({ where }) => { /* ... */ },
//     // create: async (data) => { /* ... */ },
//   },
// };

// export default mockPrisma;

// src/app/lib/prisma.ts (Este é o seu arquivo de MOCK ATUALIZADO)

// Simula um "banco de dados" em memória para os mocks
let mockTransactions: any[] = []; // Array para armazenar as transações criadas
let nextTransactionId = 1; // Para gerar IDs incrementais

let mockUsuarios = [
  {
    id: 1, // ID numérico conforme schema
    email: 'teste@email.com',
    password: '$2b$12$yk6nisSx67kudVciNF6GzOJ5eoixq7E.Rqo9sQnTO4BIhKN61Vg3u',
    nome: 'Usuário Mock',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Adicione outros usuários mockados se precisar
];
let nextUsuarioId = mockUsuarios.length > 0 ? Math.max(...mockUsuarios.map(u => u.id)) + 1 : 1;


let mockBancos = [
  { id: 1, nome: '', logoBase64: '', createdAt: new Date(), updatedAt: new Date() },
  { id: 2, nome: 'Itaú Unibanco S.A.', logoBase64: 'base64_itau', createdAt: new Date(), updatedAt: new Date() },
  { id: 3, nome: 'Santander (Brasil) S.A.', logoBase64: 'base64_santander', createdAt: new Date(), updatedAt: new Date() },
  { id: 4, nome: 'Bradesco S.A.', logoBase64: 'base64_bradesco', createdAt: new Date(), updatedAt: new Date() },
  { id: 5, nome: 'Nubank', logoBase64: 'base64_nubank', createdAt: new Date(), updatedAt: new Date() },
  { id: 6, nome: 'Caixa Econômica Federal', logoBase64: 'base64_caixa', createdAt: new Date(), updatedAt: new Date() },
  { id: 7, nome: 'Banco do Brasil S.A.', logoBase64: 'base64_bb', createdAt: new Date(), updatedAt: new Date() },
];
let nextBancoId = mockBancos.length > 0 ? Math.max(...mockBancos.map(b => b.id)) + 1 : 1;


let mockCategorias = [
  { id: 1, nome: '', createdAt: new Date(), updatedAt: new Date() }, // IDs Numéricos
  { id: 2, nome: 'Transporte', createdAt: new Date(), updatedAt: new Date() },
  { id: 3, nome: 'Moradia', createdAt: new Date(), updatedAt: new Date() },
  { id: 4, nome: 'Lazer', createdAt: new Date(), updatedAt: new Date() },
  { id: 5, nome: 'Saúde', createdAt: new Date(), updatedAt: new Date() },
  { id: 6, nome: 'Alimentação', createdAt: new Date(), updatedAt: new Date() }, 
];
let nextCategoriaId = mockCategorias.length > 0 ? Math.max(...mockCategorias.map(c => c.id)) + 1 : 1;


let mockTipoTransacoes = [
  { id: 1, descricao: 'Receita', createdAt: new Date(), updatedAt: new Date() },
  { id: 2, descricao: 'Despesa', createdAt: new Date(), updatedAt: new Date() },
];
let nextTipoTransacaoId = mockTipoTransacoes.length > 0 ? Math.max(...mockTipoTransacoes.map(t => t.id)) + 1 : 1;


const mockPrisma = {
  usuario: {
    findUnique: async ({ where }: { where: { email: string } }) => {
      return mockUsuarios.find(u => u.email === where.email) || null;
    },
    // Adicione outros métodos mockados para Usuario se precisar (ex: create)
    create: async (data: any) => {
      const newUser = { id: nextUsuarioId++, ...data, createdAt: new Date(), updatedAt: new Date() };
      mockUsuarios.push(newUser);
      return newUser;
    },
    findMany: async () => mockUsuarios,
  },

  banco: {
    findMany: async ({ orderBy }: { orderBy?: { nome?: 'asc' | 'desc' } }) => {
      let result = [...mockBancos];
      if (orderBy?.nome === 'asc') {
        result.sort((a, b) => a.nome.localeCompare(b.nome));
      } else if (orderBy?.nome === 'desc') {
        result.sort((a, b) => b.nome.localeCompare(a.nome));
      }
      return result;
    },
    // Adicione outros métodos mockados para Banco se precisar
    findUnique: async ({ where }: { where: { id: number } }) => {
      return mockBancos.find(b => b.id === where.id) || null;
    },
    create: async (data: any) => {
      const newBanco = { id: nextBancoId++, ...data, createdAt: new Date(), updatedAt: new Date() };
      mockBancos.push(newBanco);
      return newBanco;
    },
  },

  usuarioBanco: { // Novo mock para UsuarioBanco
    findMany: async () => [], // Implemente conforme a necessidade
    create: async (data: any) => {
      // Exemplo de criação de UsuarioBanco mockado
      const newUsuarioBanco = {
        id: Math.floor(Math.random() * 1000) + 1, // Exemplo simples de ID
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      // Em um mock mais complexo, você armazenaria estes
      return newUsuarioBanco;
    },
  },

  tipoTransacoes: { // Novo mock para TipoTransacoes (camelCase)
    findMany: async (p0: { where: any; orderBy: { descricao: string; }; }) => {
      return mockTipoTransacoes;
    },
    findUnique: async ({ where }: { where: { id: number } }) => {
        return mockTipoTransacoes.find(t => t.id === where.id) || null;
    },
    create: async (data: any) => {
        const newTipo = { id: nextTipoTransacaoId++, ...data, createdAt: new Date(), updatedAt: new Date() };
        mockTipoTransacoes.push(newTipo);
        return newTipo;
    }
  },

  categorias: { // O nome aqui é 'categorias' (plural)
    findMany: async ({ orderBy }: { orderBy?: { nome?: 'asc' | 'desc' } }) => {
      let result = [...mockCategorias];
      if (orderBy?.nome === 'asc') {
        result.sort((a, b) => a.nome.localeCompare(b.nome));
      } else if (orderBy?.nome === 'desc') {
        result.sort((a, b) => b.nome.localeCompare(a.nome));
      }
      return result;
    },
    // Adicione outros métodos mockados para Categorias
    findUnique: async ({ where }: { where: { id: number } }) => {
        return mockCategorias.find(c => c.id === where.id) || null;
    },
    create: async (data: any) => {
        const newCategoria = { id: nextCategoriaId++, ...data, createdAt: new Date(), updatedAt: new Date() };
        mockCategorias.push(newCategoria);
        return newCategoria;
    }
  },

  transacoes: { // Nome 'transacoes' (plural), conforme seu `@@map("transacoes")` e convenção
    findMany: async (params?: { where?: any, orderBy?: any }) => {
      let filteredTransactions = [...mockTransactions];

      // Exemplo de filtragem: adapte conforme as necessidades da sua API
      if (params?.where) {
          if (params.where.usuarioId) {
              filteredTransactions = filteredTransactions.filter(t => t.usuarioId === params.where.usuarioId);
          }
          if (params.where.bancoid) { // 'bancoid' com 'd' minúsculo
              filteredTransactions = filteredTransactions.filter(t => t.bancoid === params.where.bancoid);
          }
          if (params.where.categoriaId) {
              filteredTransactions = filteredTransactions.filter(t => t.categoriaId === params.where.categoriaId);
          }
          if (params.where.tipoId) {
              filteredTransactions = filteredTransactions.filter(t => t.tipoId === params.where.tipoId);
          }
          // Adicione outras condições de filtro aqui (ex: data, descricao, valor)
      }

      // Exemplo de ordenação: adapte conforme as necessidades da sua API
      if (params?.orderBy?.data) {
          filteredTransactions.sort((a, b) => {
              if (params.orderBy.data === 'asc') return new Date(a.data).getTime() - new Date(b.data).getTime();
              return new Date(b.data).getTime() - new Date(a.data).getTime();
          });
      }
      // Adicione outras ordenações (por valor, descricao, etc.)

      return filteredTransactions;
    },
    create: async (data: any) => {
      // Validações básicas e garantias de tipos (muito importante para o mock!)
      const dataToCreate = {
          ...data,
          id: nextTransactionId++,
          valor: parseFloat(data.valor), // Garante que valor seja número
          data: new Date(data.data || Date.now()), // Garante que data seja Date object
          createdAt: new Date(),
          updatedAt: new Date(),
      };

      // Simula a criação de uma nova transação
      mockTransactions.push(dataToCreate);
      console.log('Transação mockada criada:', dataToCreate);
      return dataToCreate;
    },
    // Adicione outros métodos se forem usados (ex: findUnique, update, delete)
    findUnique: async ({ where }: { where: { id: number } }) => {
        return mockTransactions.find(t => t.id === where.id) || null;
    },
    update: async ({ where, data }: { where: { id: number }, data: any }) => {
        const index = mockTransactions.findIndex(t => t.id === where.id);
        if (index > -1) {
            const updatedTransaction = {
                ...mockTransactions[index],
                ...data,
                updatedAt: new Date(),
            };
            if (data.valor) updatedTransaction.valor = parseFloat(data.valor);
            if (data.data) updatedTransaction.data = new Date(data.data);
            mockTransactions[index] = updatedTransaction;
            return updatedTransaction;
        }
        return null;
    },
    delete: async ({ where }: { where: { id: number } }) => {
        const initialLength = mockTransactions.length;
        mockTransactions = mockTransactions.filter(t => t.id !== where.id);
        return initialLength !== mockTransactions.length; // Retorna true se deletou
    }
  },
};

export default mockPrisma;