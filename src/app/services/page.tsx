import { Box, Button, Link } from "@mui/material";
import styles from "./services.styles.module.scss";
import Image from "next/image";
import { colors } from "../mui.styles";

export default function Services() {
  return (
    <>
      <Box className={styles["content"]}>
        <nav className={styles["content__nav"]}>
          <Link
            className={styles["content__nav__logo_area"]}
            href="http://localhost:3000/about"
            sx={{ textDecoration: "none" }}
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
          <Box className={styles["content__container"]}>
            <h2 className={styles["content__container__title"]}>
              Nossos Serviços
            </h2>

            <Box className={styles["content__container__top"]}>
              <Box className={styles["content__container__top__left"]}>
                <Box
                  className={styles["content__container__top__left__first"]}
                >
                  <h3>Análise Inteligente de Gastos</h3>
                  <p>
                    Entenda para onde seu dinheiro está indo com relatórios
                    claros e personalizados. Identifique gastos fixos, variáveis
                    e oportunidades de economia.
                  </p>
                </Box>
                <Box
                  className={styles["content__container__top__left__second"]}
                >
                  <h3>Educação Financeira Simplificada</h3>
                  <p>
                    Conteúdo prático, direto e sem complicação para ajudar você
                    a tomar decisões financeiras melhores todos os dias.
                  </p>
                </Box>
              </Box>
              <Box className={styles["content__container__top__right"]}>
                <Image
              src="/transactions.svg"
              width="72"
              height="100"
              alt="Logo"
              style={{ width: "15%", height: "auto" }}
            />
              </Box>
            </Box>
            <Box className={styles["content__container__bottom"]}>
              <Box className={styles["content__container__bottom__left"]}>
                <Image
              src="/dashboard.svg"
              width="72"
              height="100"
              alt="Logo"
              style={{ width: "15%", height: "auto" }}
            />
              </Box>
              <Box className={styles["content__container__bottom__right"]}>
                <Box
                  className={styles["content__container__bottom__right__first"]}
                >
                  <h3>Tecnologia acessível:</h3>
                  <p>
                    Tudo no seu celular ou computador, fácil e rápido.
                  </p>
                </Box>
                <Box
                  className={styles["content__container__bottom__right__second"]}
                >
                  <h3>Transparência:</h3>
                  <p>
                    Informações claras, sem enrolação.
                  </p>
                </Box>
                <Box
                  className={styles["content__container__bottom__right__third"]}
                >
                  <h3>Suporte dedicado:</h3>
                  <p>
                    Estamos aqui para ajudar você a crescer financeiramente.
                  </p>
                </Box>
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
