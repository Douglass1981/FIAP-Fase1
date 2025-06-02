import Image from "next/image";
import { Box, Button, Link } from "@mui/material";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./services.styles.module.scss";

export default function Services() {
  return (
    <>
      <Box className={styles["content"]}>
        <Navbar />
        <main>
          <Box className={styles["content__container"]}>
            <h2 className={styles["content__container__title"]}>
              Nossos Serviços
            </h2>

            <Box className={styles["content__container__top"]}>
              <Box className={styles["content__container__top__left"]}>
                <Box
                  className={styles["content__container__top__left__first"]}
                >
                  <h3 className={styles["content__container__top__left__first__title"]}>Análise Inteligente de Gastos</h3>
                  <p className={styles["content__container__top__left__first__paragraph"]}>
                    Entenda para onde seu dinheiro está indo com relatórios
                    claros e personalizados. Identifique gastos fixos, variáveis
                    e oportunidades de economia.
                  </p>
                </Box>
                <Box 
                  className={styles["content__container__top__left__second"]}
                >
                  <h3 className={styles["content__container__top__left__second__title"]}>Educação Financeira Simplificada</h3>
                  <p className={styles["content__container__top__left__second__paragraph"]}>
                    Conteúdo prático, direto e sem complicação para ajudar você
                    a tomar decisões financeiras melhores todos os dias.
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className={styles["content__container__bottom"]}>
              <Box className={styles["content__container__bottom__left"]}>
                <Image
              src="/transactions.svg"
              width="200"
              height="100"
              alt="Logo"
              style={{ height: "auto" }}
            />
              </Box>
              <Box className={styles["content__container__bottom__right"]}>
                <Box
                  className={styles["content__container__bottom__right__first"]}
                >
                  <h3 className={styles["content__container__bottom__right__first__title"]}>Tecnologia acessível:</h3>
                  <p className={styles["content__container__bottom__right__first__paragraph"]}>
                    Tudo no seu celular ou computador, fácil e rápido.
                  </p>
                </Box>
                <Box
                  className={styles["content__container__bottom__right__second"]}
                >
                  <h3 className={styles["content__container__bottom__right__second__title"]}>Transparência:</h3>
                  <p className={styles["content__container__bottom__right__second__paragraph"]}>
                    Informações claras, sem enrolação.
                  </p>
                </Box>
                <Box
                  className={styles["content__container__bottom__right__third"]}
                >
                  <h3 className={styles["content__container__bottom__right__third__title"]}>Suporte dedicado:</h3>
                  <p className={styles["content__container__bottom__right__third__paragraph"]}>
                    Estamos aqui para ajudar você a crescer financeiramente.
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </main>
        <Footer/>
      </Box>
    </>
  );
}
