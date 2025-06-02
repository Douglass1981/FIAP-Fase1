"use client";

import Image from "next/image";
import { Box, Button, Link } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MyButton from "@/components/Button";
import { colors } from "./mui.styles";
import styles from "./initial.styles.module.scss";

export default function Initial() {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <>
      <Box className={styles["content"]}>
        <nav className={styles["content__nav"]}>
          <Box className={styles["content__nav__logo_area"]}>
            {isMobile ? (
              <Image
                src="/logo.png"
                width="232"
                height="232"
                alt="Logo"
                style={{ width: "50%", height: "50%" }}
              />
            ) : (
              <Image
                src="/logo.png"
                width="72"
                height="100"
                alt="Logo"
                style={{ width: "15%", height: "auto" }}
              />
            )}
            <h1 className={styles["content__nav__logo_area__brand"]}>
              Poup.ai
            </h1>
          </Box>

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
          {isMobile ? (
            <Button sx={{ display: "none" }}>Login</Button>
          ) : (
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
          )}
        </nav>
        <main>
          <Box className={styles["content__desktop"]}>
            <Box className={styles["content__desktop__container"]}>
              <Box className={styles["content__desktop__container__left"]}>
                <h2
                  className={styles["content__desktop__container__left__title"]}
                >
                  Seu futuro começa com escolhas inteligentes.
                </h2>
                <p
                  className={styles["content__desktop__container__left__text"]}
                >
                  Descubra um novo jeito de cuidar das suas finanças com
                  soluções inteligentes, práticas e seguras.
                </p>
                <p
                  className={styles["content__desktop__container__left__text"]}
                >
                  Transforme sua relação com o dinheiro e alcance seus objetivos
                  com confiança.
                </p>
              </Box>
              <Box className={styles["content__desktop__container__rigth"]}>
                <Image
                  src="/initial-image.png"
                  width="477"
                  height="576"
                  alt="Initial image"
                  style={{ width: "100%", height: "auto" }}
                ></Image>
              </Box>
            </Box>
          </Box>
          <Box className={styles["content__mobile"]}>
            <h2 className={styles["content__mobile__title"]}>Bem Vindo!</h2>
            <p className={styles["content__mobile__text"]}>
              Descubra soluções financeiras inovadoras e confiáveis para
              garantir um futuro próspero.
            </p>
            <MyButton label="Acessar" href="/login" fullWidth/>

          </Box>
        </main>
        <footer className={styles["content__footer"]}>
          <p>© 2025 Poup.ai | Todos os direitos reservados</p>
        </footer>
      </Box>
    </>
  );
}
