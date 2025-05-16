import { Icons } from '../../icons';
import styles from './home.styles.module.scss';

export default function Home(){
  return(
      <section className={styles.home}>
        <div className={styles.card}>
            <div className={styles['presentation-card-home']}>
                <div>
                    <p className={styles['hello-message-presentation-card']}>Olá Joana</p>
                    <p>Saldo total em conta</p>
                </div>
                <Icons.Logout />
            </div>
            <span>R$400,00</span>
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

            <div>
                <div>
                    <div>
                        <p>Total despesas</p>
                        <span>R$1.659,35</span>
                    </div>
                    <div>
                        Gráfico
                        dados
                    </div>
                </div>

                <div>
                    <div>
                        <p>Total despesas</p>
                        <span>R$1.659,35</span>
                    </div>
                    <div>
                        Gráfico
                        dados
                    </div>
                </div>
            </div>
        </section>
      </section>
  );
}