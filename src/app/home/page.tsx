import Image from 'next/image';
import { PieChart } from '@/components/Graphs';
import { Icons } from '@/icons';
import styles from './home.styles.module.scss';

const receitas_data = [
    { id: 'Alimentação', value: 25, label: 'Alimentação' },
    { id: 'Educação', value: 15, label: 'Educação' },
    { id: 'Casa', value: 20, label: 'Casa' },
    { id: 'Saúde', value: 5, label: 'Saúde' },
];

const receitas_size = {
    width: 50,
    height: 50,
};

const despesas_data = [
    { id: 'Alimentação', value: 35, label: 'Alimentação' },
    { id: 'Educação', value: 4, label: 'Educação' },
    { id: 'Casa', value: 12, label: 'Casa' },
    { id: 'Saúde', value: 5, label: 'Saúde' },
];

const despesas_size = {
    width: 50,
    height: 50,
};

export default function Home(){
  return(
      <section className={styles.home}>
        <div className={styles['logo-container']}>
            <Image
                src="/logo.png"
                width="54"
                height="54"
                alt="Logo"
            />
            <h3 className={styles['title-logo-container']}>Poup.ai</h3>
        </div>

        <div className={styles.card}>
            <div className={styles['presentation-card-home']}>
                <div>
                    <div className={styles['hello-message-container']}>
                        <p className={styles['hello-message-text']}>Olá, Joana</p>
                        <Icons.WavingHand />
                    </div>
                    <p className={styles['total-balance-text']}>Saldo total em conta</p>
                </div>
                <div>
                    <Icons.Logout />
                    <span className={styles['logout-text-card']}>Sair</span>
                </div>
            </div>
            <span className={styles['account-balance-text']}>R$400,00</span>
        </div>

        <div className={styles['actions-bank-details-container']}>
            <div className={styles['actions-bank-details']}>
                <Icons.ArrowUp />
                <p>Receitas</p>
            </div>

            <div className={styles['actions-bank-details']}>
                <Icons.ArrowDown />
                <p>Despesas</p>
            </div>
            
            <div className={styles['actions-bank-details']}>
                <Icons.Transfer />
                <p>Transferir</p>
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
                    <p className={styles['title-data-details-container']}>Receitas</p>
                    <p className={styles['balance-data-details-container']}>R$3.500.57</p>
                </div>
                <Icons.ArrowUp className={`${styles.icon} ${styles.income}`} />
            </div>

            <div className={styles['data-details-container']}>
                <div>
                    <p  className={styles['title-data-details-container']}>Despesas</p>
                    <p className={styles['balance-data-details-container']}>R$3.500.57</p>
                </div>
                <Icons.ArrowDown className={`${styles.icon} ${styles.expenses}`} />
            </div>
        </div>

        <div className={styles['graph-details-container']}>
            <div className={styles['graph-details-card']}>
                <div className={styles['graph-details']}>
                    <p className={styles['title-graph-details']}>Total receita</p>
                    <span className={`${styles.balance} ${styles.income}`}>R$1.659,35</span>
                </div>
                <div className={styles.graph}>
                    <PieChart data={receitas_data} size={receitas_size} className={styles.chart} />
                </div>
            </div>

            <div className={styles['graph-details-card']}>
                <div className={styles['graph-details']}>
                    <p className={styles['title-graph-details']}>Total despesa</p>
                    <span className={`${styles.balance} ${styles.expenses}`}>R$1.659,35</span>
                </div>
                <div className={styles.graph}>
                    <PieChart data={despesas_data} size={despesas_size} className={styles.chart} />
                </div>
            </div>
        </div>
    </section>
  );
}