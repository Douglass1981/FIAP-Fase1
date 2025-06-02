"use client";

import { useRouter } from "next/navigation";
import { Avatar, Box } from "@mui/material"; // REMOVIDO Link do MUI, se ele estiver aqui, remova
import Link from "next/link"; // ADICIONADO Link do Next.js
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import Image from "next/image";
import { ChangeEvent, useState, useEffect, useMemo } from "react";
import TransactionCard from "@/components/CardTransactions";
import FilterButton from "@/components/FilterButton";
import TransactionInfo from "@/components/TransactionInfo";
import ButtonTransactions from "@/components/ButtonTransactions";
import ModalTransaction from "@/components/modal-component/modaltransaction";
import mockPrisma from "@/mockPrisma";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { colors } from "../mui.styles"; // Caminho relativo para mui.styles.ts

import styles from "./transactions.styles.module.scss"

// ADICIONADO: Importação de ROUTES (você usa no Link)
import { ROUTES } from "@/constants";

// Se você tiver um componente Footer (pelo seu código anterior, parece que sim), importe-o:
// import Footer from "@/components/Footer"; // Exemplo, ajuste o caminho se necessário


dayjs.extend(customParseFormat);

interface Transaction {
    id: number;
    category: string;
    description: string;
    date: string;
    amount: number; // Agora a prop 'amount' é um número
    type: "income" | "expenses" | "transfer";
    bankFrom?: string;
    bankTo?: string;
    bank?: string;
    bancoOrigemId?: number;
    bancoDestinoId?: number;
    bancoid?: number;
}

export default function Transactions() {
    const router = useRouter();
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [modalType, setModalType] = useState<
        "income" | "expenses" | "transfer" | null
    >(null);
    const [selectedFilter, setSelectedFilter] = useState("Última semana");

    // Você pode ter esta constante definida em outro lugar, ajuste se for o caso
    const MAIN_BANK_ID = 2; 

    const { totalIncome, totalExpenses } = useMemo(() => {
        let income = 0;
        let expenses = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                income += transaction.amount;
            } else if (transaction.type === "expenses") {
                expenses += transaction.amount;
            } else if (transaction.type === "transfer") {
                // Em transferências, a lógica de soma depende se é saída ou entrada do banco principal
                // Por simplicidade, vou manter a lógica que você já tinha para soma total
                // Mas geralmente, transferências não somam como receita/despesa total, mas sim como movimento entre contas.
                income += transaction.amount; 
            }
        });

        return { totalIncome: income, totalExpenses: expenses };
    }, [transactions]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    useEffect(() => {
        const loadInitialTransactions = async () => {
            const initialData = await mockPrisma.transacoes.findMany({});

            const adaptedData: Transaction[] = await Promise.all(
                initialData.map(async (t: any) => {
                    let categoryName = "N/A";
                    let descriptionText = "N/A";
                    let bankFromName: string | undefined;
                    let bankToName: string | undefined;
                    let bankName: string | undefined;

                    const transactionType: Transaction["type"] =
                        t.tipoId === 1
                            ? "income"
                            : t.tipoId === 2
                            ? "expenses"
                            : "transfer";

                    if (transactionType === "transfer") {
                        categoryName = "Transferência";
                        bankFromName = t.bancoOrigemId
                            ? (
                                await mockPrisma.banco.findUnique({
                                    where: { id: t.bancoOrigemId },
                                })
                            )?.nome || "N/A"
                            : "N/A";
                        bankToName = t.bancoDestinoId
                            ? (
                                await mockPrisma.banco.findUnique({
                                    where: { id: t.bancoDestinoId },
                                })
                            )?.nome || "N/A"
                            : "N/A";
                        descriptionText = `De ${bankFromName} para ${bankToName}`;
                    } else {
                        categoryName = t.categoriaId
                            ? (
                                await mockPrisma.categorias.findUnique({
                                    where: { id: t.categoriaId },
                                })
                            )?.nome || "N/A"
                            : "N/A";
                        bankName = t.bancoid
                            ? (
                                await mockPrisma.banco.findUnique({
                                    where: { id: t.bancoid },
                                })
                            )?.nome || "N/A"
                            : "N/A";
                        descriptionText = `${bankName} - ${t.descricao || "Sem Descrição"}`;
                    }

                    // --- NOVA LÓGICA ROBUSTA DE TRATAMENTO DA DATA ---
                    let formattedDate: string;
                    if (t.data) { // Verifica se t.data existe (não é null/undefined)
                        const parsedInitialDate = dayjs(t.data); // Tenta parsear a data do mockPrisma (pode ser string ou Date)
                        if (parsedInitialDate.isValid()) { // Verifica se a data é válida após o parse
                            formattedDate = parsedInitialDate.format("DD/MM/YYYY");
                        } else {
                            // Se t.data existe mas é inválido (ex: "abc"), usa um fallback
                            console.warn(`[transactions/page.tsx] Data inválida encontrada para transação ${t.id}: ${t.data}`);
                            formattedDate = dayjs().format("DD/MM/YYYY"); // Fallback: data atual
                        }
                    } else {
                        // Se t.data for null ou undefined, usa um fallback
                        console.warn(`[transactions/page.tsx] Data ausente para transação ${t.id}.`);
                        formattedDate = dayjs().format("DD/MM/YYYY"); // Fallback: data atual
                    }
                    // --- FIM DA NOVA LÓGICA ---

                    return {
                        id: t.id,
                        category: categoryName,
                        description: descriptionText,
                        date: formattedDate, // Use a data que foi validada e formatada
                        amount: t.valor, // **VERIFIQUE SE t.valor é SEMPRE UM NÚMERO em seu mockPrisma/dados!**
                        type: transactionType,
                        bank: bankName,
                        bankFrom: bankFromName,
                        bankTo: bankToName,
                        bancoOrigemId: t.bancoOrigemId,
                        bancoDestinoId: t.bancoDestinoId,
                        bancoid: t.bancoid,
                    };
                })
            );
            setTransactions(adaptedData);
        };
        loadInitialTransactions();
    }, []);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedPath = event.target.value;
        if (selectedPath) {
            router.push(selectedPath);
        }
    };

    const handleDelete = (idToDelete: number) => {
        setTransactions(
            transactions.filter((transaction) => transaction.id !== idToDelete)
        );
        console.log(`Transação com ID ${idToDelete} excluída`);
    };

    const handleAddTransaction = (newTransaction: Transaction) => {
        setTransactions((prevTransactions) => [
            ...prevTransactions,
            newTransaction,
        ]);
        setModalType(null);
    };

    const filters = [
        "Última semana",
        "Último mês",
        "Últimos 6 meses",
        "Último ano",
    ];

    // O iconMap original não usava cores, apenas retornava o ícone.
    // O TransactionCard passa a cor diretamente para o ícone agora.
    const iconMapForMenu = {
        income: <ArrowUpwardIcon />,
        expenses: <ArrowDownwardIcon />,
        transfer: <SyncAltOutlinedIcon />,
    };

    const handleUpdateTransaction = (updatedTransaction: Transaction) => {
        setTransactions((prevTransactions) =>
            prevTransactions.map((t) =>
                t.id === updatedTransaction.id ? updatedTransaction : t
            )
        );
    };

    return (
        <>
            <Box className={styles["transactions"]}>
                <nav className={styles["transactions__nav"]}>
                    {/* Usando Link do Next.js e aplicando styles diretamente ou via className */}
                    <Link
                        className={styles["transactions__nav__logo_area"]}
                        href={ROUTES.HOME}
                        // Removido sx, pois Link do Next.js não tem diretamente. Se precisar de estilo, aplique via CSS Modules ou um wrapper MUI
                    >
                        <Image
                            src="/logo.png"
                            width="72"
                            height="100"
                            alt="Logo"
                            style={{ width: "15%", height: "auto" }}
                        />
                        <h1 className={styles["transactions__nav__logo_area__brand"]}>
                            Poup.ai
                        </h1>
                    </Link>
                </nav>
                <main className={styles["transactions__main"]}>
                    <Box className={styles["transactions__main__container-info"]}>
                        <Box
                            className={
                                styles["transactions__main__container-info__navigation"]
                            }
                        >
                            <select
                                onChange={handleChange}
                                className={
                                    styles[
                                        "transactions__main__container-info__navigation__select"
                                    ]
                                }
                            >
                                <option
                                    value="/transactions" // Caminho correto para esta própria página
                                    className={
                                        styles[
                                            "transactions__main__container-info__navigation__select__options"
                                        ]
                                    }
                                >
                                    Transações
                                </option>
                                <option
                                    value="/income"
                                    className={
                                        styles[
                                            "transactions__main__container-info__navigation__select__options"
                                        ]
                                    }
                                >
                                    Receitas
                                </option>
                                <option
                                    value="/expenses"
                                    className={
                                        styles[
                                            "transactions__main__container-info__navigation__select__options"
                                        ]
                                    }
                                >
                                    Despesas
                                </option>
                            </select>
                        </Box>
                        <Box
                            className={
                                styles["transactions__main__container-info__container"]
                            }
                        >
                            <Box
                                className={
                                    styles["transactions__main__container-info__container__left"]
                                }
                            >
                                <TransactionInfo
                                    type="income"
                                    title="Receitas"
                                    amount={formatCurrency(totalIncome)}
                                />
                                <TransactionInfo
                                    type="expenses"
                                    title="Despesas"
                                    amount={formatCurrency(totalExpenses)}
                                />
                            </Box>
                            <Box
                                className={
                                    styles["transactions__main__container-info__container__right"]
                                }
                            >
                                {(["income", "expenses", "transfer"] as const).map((type) => (
                                    <Box
                                        key={type}
                                        className={
                                            styles[
                                                "transactions__main__container-info__container__right__function"
                                            ]
                                        }
                                        onClick={() => setModalType(type)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Box
                                            className={
                                                styles[
                                                    "transactions__main__container-info__container__right__function__icon-area"
                                                ]
                                            }
                                        >
                                            <Avatar
                                                sx={{
                                                    backgroundColor: colors.gray300,
                                                    color: colors.gray800,
                                                }}
                                            >
                                                {iconMapForMenu[type]} {/* Usando o iconMap local */}
                                            </Avatar>
                                        </Box>
                                        <p
                                            className={
                                                styles[
                                                    "transactions__main__container-info__container__right__function__text"
                                                ]
                                            }
                                        >
                                            {type === "income"
                                                ? "Receitas"
                                                : type === "expenses"
                                                ? "Despesas"
                                                : "Transferência"}
                                        </p>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    <Box className={styles["transactions__main__container-carousel"]}>
                        {filters.map((filter) => (
                            <FilterButton
                                key={filter}
                                label={filter}
                                selected={selectedFilter === filter}
                                onClick={() => setSelectedFilter(filter)}
                            />
                        ))}
                    </Box>

                    <Box className={styles["transactions__main__container-transactions"]}>
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => (
                                <TransactionCard
                                    key={transaction.id}
                                    id={transaction.id}
                                    category={transaction.category}
                                    description={transaction.description}
                                    // A data já é formatada e validada aqui.
                                    date={transaction.date}
                                    amount={transaction.amount} // Passando amount como number
                                    onDelete={() => handleDelete(transaction.id)}
                                    onEdit={handleUpdateTransaction} // Adicionado onEdit prop para o Card
                                    type={transaction.type}
                                    bankFrom={transaction.bankFrom}
                                    bankTo={transaction.bankTo}
                                    bank={transaction.bank}
                                    bancoOrigemId={transaction.bancoOrigemId}
                                    bancoDestinoId={transaction.bancoDestinoId}
                                    bancoid={transaction.bancoid}
                                />
                            ))
                        ) : (
                            <p>Nenhuma transação encontrada.</p>
                        )}
                    </Box>

                    <ButtonTransactions
                        onClick={() => setModalType("transfer")}
                        className={styles["transactions__main__button--hidden"]}
                    />
                </main>
            </Box>
            {/* Certifique-se de que o componente Footer está importado corretamente */}
            {/* <Footer/> */}
            {modalType && (
                <ModalTransaction
                    type={modalType}
                    open={true}
                    onClose={() => setModalType(null)}
                    onAddTransaction={handleAddTransaction}
                />
            )}
        </>
    );
}