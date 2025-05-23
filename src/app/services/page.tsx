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
            href="http://localhost:3000"
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
              <Box className={styles["content__container__top__right"]}>
                <Image
              src="/dashboard.svg"
              width="100"
              height="100"
              alt="Logo"
              style={{ height: "100%", width: 'auto', maxWidth: '80%' }}
              
            />
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
        <footer className={styles["content__footer"]}>
          <p>© 2025 Poup.ai | Todos os direitos reservados</p>
        </footer>
      </Box>
    </>
  );
}
