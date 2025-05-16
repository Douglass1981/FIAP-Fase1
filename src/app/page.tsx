"use client";

import { Box, Button, Checkbox, Container } from "@mui/material";
import Image from "next/image";
import Link from "@mui/material/Link";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function HOME() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <main className={`${styles.login} ${poppins.className}`}>
        <Box className={styles.login__container}>
          <Box className={styles.login__container__logo_area}>
            <Image src="/logo.png" width="72" height="72" alt="Logo" />
            <h1 className={styles.login__container__logo_area__brand}>
              Poup.ai
            </h1>
          </Box>

          <Box className={styles.login__container__form_area}>
            <Box className={styles.login__container__form_area__text}>
              <h2 className={styles.login__container__form_area__text__title}>
                Acesse
              </h2>
              <h3
                className={styles.login__container__form_area__text__subtitle}
              >
                Com seu login e senha
              </h3>
            </Box>
            <Box className={styles.login__container__form_area__form}>
              <TextField
                id="name"
                label="Nome"
                placeholder="Digite seu nome"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="email"
                label="Email"
                placeholder="Digite seu email"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="senha"
                label="Senha"
                placeholder="Digite seu senha"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box className={styles.login__container__form_area__form__checkbox}>
                <Checkbox />
                <p
                  className={styles.login__container__form_area__form__checkbox__text}
                >
                  Lembrar minha senha
                </p>
              </Box>
              <Button
                variant="contained"
                fullWidth
                className={`${styles.login__container__form_area__form__button} ${poppins.className}`}
              >
                Entrar
              </Button>
              <Box className={styles.login__container__form_area__form__redirect}>
                <p
                  className={styles.login__container__form_area__form__redirect__text}
                >
                  Ainda não tem uma conta?{" "}
                  <Link
                    className={
                      styles.login__container__form_area__form__redirect__text__link
                    }
                    href="http://localhost:3000/cadastro"
                  >
                    Cadastre-se
                  </Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.login__side}>
          <Image
            src="/undraw_transfer-money.svg"
            width={467}
            height={448}
            alt="Bem Vindo"
          />
          <h2 className={styles.login__side__title}>Seja bem-vindo!</h2>
          <h3 className={styles.login__side__description}>
            Descubra soluções financeiras inovadoras e confiáveis para garantir
            um futuro próspero
          </h3>
        </Box>
      </main>
    </>
  );
}
