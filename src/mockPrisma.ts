
let mockUsuarios = [
    {
        id: 1, 

       email: "teste@email.com",
        password: "$2b$12$74IWe1t8za.N352Mfv2Q..ZrL20muTQHKX/agQSiUw5pjYUgDDKIa", 
        nome: "Joana Silva",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
  
];
let nextUsuarioId = mockUsuarios.length > 0 ? Math.max(...mockUsuarios.map((u) => u.id)) + 1 : 1;


let mockBancos = [
    {
        id: 1,
        nome: "Banco Principal",
        logoBase64: "base64_principal",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    {
        id: 2,
        nome: "Itaú Unibanco S.A.",
        logoBase64: "base64_itau",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    {
        id: 3,
        nome: "Santander (Brasil) S.A.",
        logoBase64: "base64_santander",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    {
        id: 4,
        nome: "Bradesco S.A.",
        logoBase64: "base64_bradesco",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    {
        id: 5,
        nome: "Nubank",
        logoBase64: "base64_nubank",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    {
        id: 6,
        nome: "Caixa Econômica Federal",
        logoBase64: "base64_caixa",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    {
        id: 7,
        nome: "Banco do Brasil S.A.",
        logoBase64: "base64_bb",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
];
let nextBancoId = mockBancos.length > 0 ? Math.max(...mockBancos.map((b) => b.id)) + 1 : 1;



let mockCategorias = [
    { id: 1, nome: "Geral", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 2, nome: "Transporte", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 3, nome: "Moradia", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 4, nome: "Lazer", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 5, nome: "Saúde", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 6, nome: "Alimentação", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 7, nome: "Pix", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    {
        id: 8,
        nome: "Cartão de Crédito",
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    { id: 9, nome: "Salário", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 10, nome: "Investimentos", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 11, nome: "Serviços", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
];
let nextCategoriaId = mockCategorias.length > 0 ? Math.max(...mockCategorias.map((c) => c.id)) + 1 : 1;



let mockTipoTransacoes = [
    { id: 1, descricao: "Receita", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 2, descricao: "Despesa", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
    { id: 3, descricao: "Transferência", createdAt: new Date("2024-01-01T10:00:00Z"), updatedAt: new Date("2024-01-01T10:00:00Z") },
];
let nextTipoTransacaoId = mockTipoTransacoes.length > 0 ? Math.max(...mockTipoTransacoes.map((t) => t.id)) + 1 : 1;



let mockTransactions: any[] = [
    
    {
        id: 1,
        usuarioId: 1,
        valor: 3500.00,
        tipoId: 1, 
        categoriaId: 9,
        bancoid: 5, 
        descricao: "Salário de Junho",
        data: new Date("2025-06-01T09:00:00Z"), 
        createdAt: new Date("2025-06-01T09:00:00Z"),
        updatedAt: new Date("2025-06-01T09:00:00Z"),
    },
    {
        id: 2,
        usuarioId: 1,
        valor: 150.00,
        tipoId: 1, 
        categoriaId: 10, 
        bancoid: 2, 
        descricao: "Rendimento de Poupança",
        data: new Date("2025-05-20T10:00:00Z"),
        createdAt: new Date("2025-05-20T10:00:00Z"),
        updatedAt: new Date("2025-05-20T10:00:00Z"),
    },
    {
        id: 3,
        usuarioId: 1,
        valor: 50.00,
        tipoId: 1, 
        categoriaId: 1, 
        bancoid: 1,
        descricao: "Reembolso de Despesa",
        data: new Date("2025-05-28T11:00:00Z"),
        createdAt: new Date("2025-05-28T11:00:00Z"),
        updatedAt: new Date("2025-05-28T11:00:00Z"),
    },

    
    {
        id: 4,
        usuarioId: 1,
        valor: 300.00,
        tipoId: 2, 
        categoriaId: 6, 
        bancoid: 5, 
        descricao: "Compras de Supermercado",
        data: new Date("2025-06-02T15:00:00Z"), 
        createdAt: new Date("2025-06-02T15:00:00Z"),
        updatedAt: new Date("2025-06-02T15:00:00Z"),
    },
    {
        id: 5,
        usuarioId: 1,
        valor: 120.00,
        tipoId: 2, 
        categoriaId: 2, 
        bancoid: 3, 
        descricao: "Gasolina",
        data: new Date("2025-05-30T08:00:00Z"),
        createdAt: new Date("2025-05-30T08:00:00Z"),
        updatedAt: new Date("2025-05-30T08:00:00Z"),
    },
    {
        id: 6,
        usuarioId: 1,
        valor: 800.00,
        tipoId: 2, 
        categoriaId: 3, 
        bancoid: 5, 
        descricao: "Aluguel",
        data: new Date("2025-06-01T12:00:00Z"),
        createdAt: new Date("2025-06-01T12:00:00Z"),
        updatedAt: new Date("2025-06-01T12:00:00Z"),
    },

   
    {
        id: 7,
        usuarioId: 1,
        valor: 500.00,
        tipoId: 3, 
        bancoOrigemId: 5, 
        bancoDestinoId: 2,
        descricao: "Transferência Nubank -> Itaú",
        data: new Date("2025-05-29T10:00:00Z"),
        createdAt: new Date("2025-05-29T10:00:00Z"),
        updatedAt: new Date("2025-05-29T10:00:00Z"),
    },
];

let nextTransactionId = mockTransactions.length > 0 ? Math.max(...mockTransactions.map((t) => t.id)) + 1 : 1;



const initialMockState = {
    usuarios: JSON.parse(JSON.stringify(mockUsuarios)), 
    bancos: JSON.parse(JSON.stringify(mockBancos)),
    categorias: JSON.parse(JSON.stringify(mockCategorias)),
    tipoTransacoes: JSON.parse(JSON.stringify(mockTipoTransacoes)),
    transactions: JSON.parse(JSON.stringify(mockTransactions)),
};


const resetMocks = () => {
    mockUsuarios = JSON.parse(JSON.stringify(initialMockState.usuarios));
    nextUsuarioId = mockUsuarios.length > 0 ? Math.max(...mockUsuarios.map((u) => u.id)) + 1 : 1;

    mockBancos = JSON.parse(JSON.stringify(initialMockState.bancos));
    nextBancoId = mockBancos.length > 0 ? Math.max(...mockBancos.map((b) => b.id)) + 1 : 1;

    mockCategorias = JSON.parse(JSON.stringify(initialMockState.categorias));
    nextCategoriaId = mockCategorias.length > 0 ? Math.max(...mockCategorias.map((c) => c.id)) + 1 : 1;

    mockTipoTransacoes = JSON.parse(JSON.stringify(initialMockState.tipoTransacoes));
    nextTipoTransacaoId = mockTipoTransacoes.length > 0 ? Math.max(...mockTipoTransacoes.map((t) => t.id)) + 1 : 1;

    mockTransactions = JSON.parse(JSON.stringify(initialMockState.transactions));
    nextTransactionId = mockTransactions.length > 0 ? Math.max(...mockTransactions.map((t) => t.id)) + 1 : 1;

    console.log("Mocks resetados para o estado inicial.");
};


const mockPrisma = {
    usuario: {
        findUnique: async ({ where }: { where: { email: string } }) => {
            return mockUsuarios.find((u) => u.email === where.email) || null;
        },
        create: async (data: any) => {
            const newUser = {
                id: nextUsuarioId++,
                ...data,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            mockUsuarios.push(newUser);
            return newUser;
        },
        findMany: async () => mockUsuarios,
    },

    banco: {
        findMany: async ({ orderBy }: { orderBy?: { nome?: "asc" | "desc" } }) => {
            let result = [...mockBancos];
            if (orderBy?.nome === "asc") {
                result.sort((a, b) => a.nome.localeCompare(b.nome));
            } else if (orderBy?.nome === "desc") {
                result.sort((a, b) => b.nome.localeCompare(a.nome));
            }
            return result;
        },
        findUnique: async ({ where }: { where: { id: number } }) => {
            return mockBancos.find((b) => b.id === where.id) || null;
        },
        create: async (data: any) => {
            const newBanco = {
                id: nextBancoId++,
                ...data,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            mockBancos.push(newBanco);
            return newBanco;
        },
    },

    usuarioBanco: {
        findMany: async () => [], 
        create: async (data: any) => {
            const newUsuarioBanco = {
                id: Math.floor(Math.random() * 1000) + 1, 
                ...data,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            return newUsuarioBanco;
        },
    },

    tipoTransacoes: {
        findMany: async (p0: { where: any; orderBy: { descricao: string } }) => {
            return mockTipoTransacoes;
        },
        findUnique: async ({ where }: { where: { id: number } }) => {
            return mockTipoTransacoes.find((t) => t.id === where.id) || null;
        },
        create: async (data: any) => {
            const newTipo = {
                id: nextTipoTransacaoId++,
                ...data,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            mockTipoTransacoes.push(newTipo);
            return newTipo;
        },
    },

    categorias: {
        findMany: async ({ orderBy }: { orderBy?: { nome?: "asc" | "desc" } }) => {
            let result = [...mockCategorias];
            if (orderBy?.nome === "asc") {
                result.sort((a, b) => a.nome.localeCompare(b.nome));
            } else if (orderBy?.nome === "desc") {
                result.sort((a, b) => b.nome.localeCompare(a.nome));
            }
            return result;
        },
        findUnique: async ({ where }: { where: { id: number } }) => {
            return mockCategorias.find((c) => c.id === where.id) || null;
        },
        create: async (data: any) => {
            const newCategoria = {
                id: nextCategoriaId++,
                ...data,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            mockCategorias.push(newCategoria);
            return newCategoria;
        },
    },

    transacoes: {
        findMany: async (params?: { where?: any; orderBy?: any }) => {
            let filteredTransactions = [...mockTransactions];

            if (params?.where) {
                if (params.where.usuarioId) {
                    filteredTransactions = filteredTransactions.filter(
                        (t) => t.usuarioId === params.where.usuarioId
                    );
                }
                if (params.where.bancoid) {
                    filteredTransactions = filteredTransactions.filter(
                        (t) => t.bancoid === params.where.bancoid
                    );
                }
                if (params.where.categoriaId) {
                    filteredTransactions = filteredTransactions.filter(
                        (t) => t.categoriaId === params.where.categoriaId
                    );
                }
                if (params.where.tipoId) {
                    filteredTransactions = filteredTransactions.filter(
                        (t) => t.tipoId === params.where.tipoId
                    );
                }
                if (params.where.data && params.where.data.gte) {
                    const gteDate = new Date(params.where.data.gte);
                    filteredTransactions = filteredTransactions.filter(
                        (t) => new Date(t.data) >= gteDate
                    );
                }
                if (params.where.data && params.where.data.lte) {
                    const lteDate = new Date(params.where.data.lte);
                    filteredTransactions = filteredTransactions.filter(
                        (t) => new Date(t.data) <= lteDate
                    );
                }
            }

            if (params?.orderBy?.data) {
                filteredTransactions.sort((a, b) => {
                    if (params.orderBy.data === "asc")
                        return new Date(a.data).getTime() - new Date(b.data).getTime();
                    return new Date(b.data).getTime() - new Date(a.data).getTime();
                });
            } else {
                filteredTransactions.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
            }

            return filteredTransactions;
        },
        create: async (data: any) => {
            const dataToCreate = {
                ...data,
                id: nextTransactionId++,
                valor: typeof data.valor === 'string' ? parseFloat(data.valor) : data.valor,
                data: data.data ? new Date(data.data) : new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            mockTransactions.push(dataToCreate);
            console.log("Mock: Transação criada:", dataToCreate);
            return dataToCreate;
        },
        findUnique: async ({ where }: { where: { id: number } }) => {
            return mockTransactions.find((t) => t.id === where.id) || null;
        },
        update: async ({ where, data }: { where: { id: number }; data: any }) => {
            const index = mockTransactions.findIndex((t) => t.id === where.id);
            if (index > -1) {
                const updatedTransaction = {
                    ...mockTransactions[index],
                    ...data,
                    updatedAt: new Date(),
                };
                if (data.valor !== undefined) updatedTransaction.valor = typeof data.valor === 'string' ? parseFloat(data.valor) : data.valor;
                if (data.data !== undefined) updatedTransaction.data = new Date(data.data);
                mockTransactions[index] = updatedTransaction;
                console.log("Mock: Transação atualizada:", updatedTransaction);
                return updatedTransaction;
            }
            return null;
        },
        delete: async ({ where }: { where: { id: number } }) => {
            const initialLength = mockTransactions.length;
            mockTransactions = mockTransactions.filter((t) => t.id !== where.id);
            const deleted = initialLength !== mockTransactions.length;
            if (deleted) {
                console.log(`Mock: Transação ${where.id} excluída.`);
            } else {
                console.log(`Mock: Transação ${where.id} não encontrada para exclusão.`);
            }
            return deleted;
        },
    },
};

export default mockPrisma;