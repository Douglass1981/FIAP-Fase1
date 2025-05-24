import { Box, Button, Link } from "@mui/material";
import styles from "./sobre.styles.module.scss";
import Image from "next/image";
import { colors } from "../mui.styles";

export default function Initial() {
  return (
    <>
      <Box className={styles["content"]}>
        <nav className={styles["content__nav"]}>
            <Link className={styles["content__nav__logo_area"]}
            href="http://localhost:3000"
            sx={{ textDecoration: "none"}}
            >
            <Image
              src="/logo.png"
              width="72"
              height="100"
              alt="Logo"
              style={{ width: "15%", height: "auto" }}
            />
            <h1 className={styles["content__nav__logo_area__brand"]}>
              Poup.ai
            </h1>
            </Link>
          

          <Box className={styles["content__nav__redirect_pages"]}>
            <Link
              sx={{ textDecoration: "none", color: colors.black }}
              href="http://localhost:3000/about"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Sobre nós
            </Link>
            <Link
              sx={{ textDecoration: "none", color: colors.black }}
              href="http://localhost:3000/services"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Serviços
            </Link>
            <Link
              sx={{ textDecoration: "none", color: colors.black }}
              href="http://localhost:3000/contact"
              className={styles["content__nav__redirect_pages__link"]}
            >
              Entre em contato
            </Link>
          </Box>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: colors.bluePrimary500,
            }}
            variant="contained"
            href="http://localhost:3000/login"
            className={styles["content__nav__button"]}
          >
            Login
          </Button>
        </nav>
        <main>
          <Box className={styles["container"]}>
            <h2 className={styles["container__title"]}>
              No Poup.ai, acreditamos que todos merecem ter controle sobre suas
              finanças de forma simples e inteligente.
            </h2>
            <Box className={styles["container__material"]}>
              <Box className={styles["container__material__left"]}>
                <p className={styles["container__material__left__text"]}>
                  Somos uma plataforma criada para ajudar você a entender,
                  planejar e otimizar seus gastos com tecnologia acessível e
                  insights personalizados.
                </p>
                <p className={styles["container__material__left__text"]}>
                  Acreditamos que educação financeira não precisa ser
                  complicada. Com o Poup.ai, você tem uma visão clara do que faz
                  sentido manter, ou melhorar — sem fórmulas mágicas, apenas
                  transparência, praticidade e resultados.
                </p>
                <p className={styles["container__material__left__text"]}>
                  Nosso compromisso é com a sua liberdade financeira. Estamos
                  aqui para mostrar que, com informação e organização, seu
                  dinheiro pode trabalhar melhor para você.
                </p>
              </Box>
              <Box className={styles["container__material__right"]}>
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
