import { Box } from "@mui/material";
import styles from "./sobre.styles.module.scss";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Users } from "@/services";

export default async function Initial() {
  return (
    <>
      <Box className={styles["content"]}>
        <Navbar />
        <main>
          <Box className={styles["content__container"]}>
            <h2 className={styles["content__container__title"]}>
              No Poup.ai, acreditamos que todos merecem ter controle sobre suas
              finanças de forma simples e inteligente.
            </h2>
            <Box className={styles["content__container__material"]}>
              <Box className={styles["content__container__material__left"]}>
                <p className={styles["content__container__material__left__text"]}>
                  Somos uma plataforma criada para ajudar você a entender,
                  planejar e otimizar seus gastos com tecnologia acessível e
                  insights personalizados.
                </p>
                <p className={styles["content__container__material__left__text"]}>
                  Acreditamos que educação financeira não precisa ser
                  complicada. Com o Poup.ai, você tem uma visão clara do que faz
                  sentido manter, ou melhorar — sem fórmulas mágicas, apenas
                  transparência, praticidade e resultados.
                </p>
                <p className={styles["content__container__material__left__text"]}>
                  Nosso compromisso é com a sua liberdade financeira. Estamos
                  aqui para mostrar que, com informação e organização, seu
                  dinheiro pode trabalhar melhor para você.
                </p>
              </Box>
              <Box className={styles["content__container__material__right"]}>
                <Image
                  src="/undraw_pay-online.svg"
                  width="72"
                  height="100"
                  alt="Logo"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Box>
          </Box>
        </main>
        <footer className={styles["content__footer"]}>
          <p>© 2025 Poup.ai | Todos os direitos reservados</p>
        </footer>
      </Box>
    </>
  );
}
