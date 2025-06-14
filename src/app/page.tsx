"use client";

import Image from "next/image";
import { Box, Link } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Button from "@/components/Button";
import { Footer } from "@/components/Footer";
import { ROUTES } from "@/constants";
import { colors } from "./mui.styles";
import styles from "./initial.styles.module.scss";
import Navbar from "@/components/Navbar";

export default function Initial() {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <>
      <Box className={styles["content"]}>
        <nav className={styles["content__nav"]}>
  <Box className={styles["content__nav__logo_area"]}>
    {isMobile ? (
      <>
        <Image
          src="/logo.png"
          width="232"
          height="232"
          alt="Logo"
          style={{ width: "50%", height: "50%" }}
        />
        <h1 className={styles["content__nav__logo_area__brand"]}>
          Poup.ai
        </h1>
        <Button sx={{ display: "none" }} label="Login" />
      </>
    ) : (
      <Navbar />
    )}
  </Box>
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
            <Button label="Acessar" href={ROUTES.LOGIN} fullWidth/>

          </Box>
        </main>
        <Footer/>
      </Box>
    </>
  );
}
