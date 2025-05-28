"use client";
import { useEffect, useState } from 'react';
import { Icons } from '../../icons';
import styles from './home.styles.module.scss';

export default function Home(){
      const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Ao carregar o componente, tente recuperar o nome do usuário do localStorage
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []); // O array vazio garante que este useEffect roda apenas uma vez ao montar o componente

  return(
      <section className={styles.home}>
        <div className={styles.card}>
            <div className={styles['presentation-card-home']}>
                <div>
                    <p className={styles['hello-message-text']}>
                        Olá, {userName ? userName :'Usuario'}
                        </p>
                    <p>Saldo total em conta</p>
                </div>
                <Icons.Logout />
            </div>
            <span className={styles['account-balance-text']}>R$400,00</span>
        </div>

        <section className={styles['bank-details-container']}>
            <div className={styles['actions-bank-details-container']}>
                <div className={styles['actions-bank-details']}>
                    <div className={styles['actions-icon-bank-details']}>
                        <Icons.ArrowUp />
                    </div>
                    <p>Receitas</p>
                </div>
                <div className={styles['actions-bank-details']}>
                    <Icons.ArrowDown />
                    <p>Despesas</p>
                </div>
                <div className={styles['actions-bank-details']}>
                    <Icons.Transfer />
                    <p>Tranferir</p>
                </div>
                <div className={styles['actions-bank-details']}>
                    <Icons.Statement />
                    <p>Extrato</p>
                </div>
                <div className={styles['actions-bank-details']}>
                    <Icons.CompareArrows />
                    <p>Comparar</p>
                </div>
            </div>

            <div className={styles['details-container']}>
                <div className={styles['data-details-container']}>
                    <div>
                        <p>Receitas</p>
                        <p>R$3.500.57</p>
                    </div>
                    <Icons.ArrowUp className={`${styles.icon} ${styles.income}`} />
                </div>

                <div className={styles['data-details-container']}>
                    <div>
                        <p>Despesas</p>
                        <p>R$3.500.57</p>
                    </div>
                    <Icons.ArrowDown className={`${styles.icon} ${styles.expenses}`} />
                </div>
            </div>

            <div className={styles['graph-details-container']}>
                <div className={styles['graph-details-card']}>
                    <div className={styles['graph-details']}>
                        <p>Total despesas</p>
                        <span>R$1.659,35</span>
                    </div>
                    <div className={styles.graph}>
                        Gráfico
                        dados
                    </div>
                </div>

                <div className={styles['graph-details-card']}>
                    <div className={styles['graph-details']}>
                        <p>Total receitas</p>
                        <span>R$1.659,35</span>
                    </div>
                    <div className={styles.graph}>
                        Gráfico
                        dados
                    </div>
                </div>
            </div>
        </section>
      </section>
  );
}