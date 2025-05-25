'use client'

import styles from "./transactions.styles.module.scss";
import { Box, Button} from "@mui/material";
import { useRouter } from "next/navigation";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Transactions() {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };
  return (
    <>
      <main className={styles["transactions"]}>
        <Box className={styles["transactions__container-info"]}>
          <Box className={styles["transactions__container-info__navigation"]}>
            <ArrowBackIosIcon />
            <select
              onChange={handleChange}
            >
              <option value="/transactions">Transações</option>
              <option value="/income">Receitas</option>
              <option value="/expenses">Despesas</option>
            </select>
          </Box>
          <Box className={styles["transactions__container-info__card-income"]}>
            <Box className={styles["transactions__container-info__card-income__text-area"]}>
                <p className={styles["transactions__container-info__card-income__text-area__title"]}>Receitas</p>
            <p className={styles["transactions__container-info__card-income__text-area__amount"]}>R$ 0,00</p>
            </Box>
            <Box className={styles["transactions__container-info__card-income__icon-area"]}>
                <ArrowUpwardIcon/>
            </Box>
          </Box>
          <Box className={styles["transactions__container-info__card-expenses"]}>
            <Box className={styles["transactions__container-info__card-expenses__text-area"]}>
                <p className={styles["transactions__container-info__card-expenses__text-area__title"]}>Receitas</p>
            <p className={styles["transactions__container-info__card-expenses__text-area__value"]}>R$ 0,00</p>
            </Box>
            <Box className={styles["transactions__container-info__card-expenses__icon-area"]}>
                <ArrowDownwardIcon/>
            </Box>
          </Box>  
        </Box>
        <Box className={styles["transactions__container-carousel"]}>
            <Box className={styles["transactions__container-carousel__tag"]}>
                <p className={styles["transactions__container-carousel__tag__text"]}>Ultima semana</p>
            </Box>
            <Box className={styles["transactions__container-carousel__tag"]}>
                <p className={styles["transactions__container-carousel__tag__text"]}>Ultimo mês</p>
            </Box>
            <Box className={styles["transactions__container-carousel__tag"]}>
                <p className={styles["transactions__container-carousel__tag__text"]}>Ultimos 6 meses</p>
            </Box>
            <Box className={styles["transactions__container-carousel__tag"]}>
                <p className={styles["transactions__container-carousel__tag__text"]}>Ultimo ano</p>
            </Box>
        </Box>
        <Box className={styles["transactions__container-transactions"]}>
            <Box className={styles['transactions__container-transactions__card-transactions']}>
                <Box className={styles['transactions__container-transactions__card-transactions__icon-area']}>
                    <SyncAltOutlinedIcon/>
                </Box>
                <Box className={styles['transactions__container-transactions__card-transactions__text-area']}>
                    <p className={styles['transactions__container-transactions__card-transactions__text-area__category']}>Categoria</p>
                    <p className={styles['transactions__container-transactions__card-transactions__text-area__info']}>Banco</p>
                    <p className={styles['transactions__container-transactions__card-transactions__text-area__info']}>25/05/2025</p>
                    <p className={styles['transactions__container-transactions__card-transactions__text-area__amount']}>R$ 0,00</p>
                </Box>
                <Box className={styles['transactions__container-transactions__card-transactions__actions-area']}>
                    <VisibilityOutlinedIcon/>
                    <EditOutlinedIcon/>
                    <DeleteOutlineIcon/>
                </Box>
            </Box>
        </Box>

        <Button variant="contained" fullWidth className={styles['transactions_button']}>
            <AddOutlinedIcon/>
            Adicionar transferencia
        </Button>
      </main>
    </>
  );
}
