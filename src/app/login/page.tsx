"use client";

<<<<<<< HEAD
import { Box, Button, Checkbox, Container } from "@mui/material";
import Image from "next/image";
import Link from "@mui/material/Link";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import styles from "./home.styles.module.scss";

export default function HOME() {
=======
import { Box, Button, Checkbox} from "@mui/material";
import Image from "next/image";
import Link from "@mui/material/Link";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
<<<<<<< HEAD:src/app/page.tsx
import styles from "./home.styles.module.scss";
import {colors} from "./mui.styles"
=======
import styles from "./login.styles.module.scss";
import {colors} from "../mui.styles";
import { useMediaQuery } from "@mui/material";
>>>>>>> dev:src/app/login/page.tsx

export default function Login() {
>>>>>>> fa0f9d98927fa9d1bef3df5e214280aeca74b432
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

<<<<<<< HEAD
=======
  const isMobile = useMediaQuery("(max-width:767px)");

>>>>>>> fa0f9d98927fa9d1bef3df5e214280aeca74b432
  return (
    <>
      <main className={styles['login']}>
        <Box className={styles['login__container']}>
          <Box className={styles['login__container__logo_area']}>
<<<<<<< HEAD
            <Image src="/logo.png" width="100" height="100" alt="Logo" className="login__container__logo_area__image" />
=======
            {isMobile ? (
              <Image
                src="/logo.png"
                width="232"
                height="232"
                alt="Logo"
                style={{ width: "30%", height: "auto" }}
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
>>>>>>> fa0f9d98927fa9d1bef3df5e214280aeca74b432
            <h1 className={styles['login__container__logo_area__brand']}>
              Poup.ai
            </h1>
          </Box>

          <Box className={styles['login__container__form-area']}>
            <Box className={styles['login__container__form-area__text']}>
              <h2 className={styles['login__container__form-area__text__title']}>
                Acesse
              </h2>
              <h3 className={styles['login__container__form-area__text__subtitle']}>
                Com seu login e senha
              </h3>
            </Box>
            <Box className={styles['login__container__form-area__form']}>
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
              <Box className={styles['login__container__form-area__form__checkbox']}>
                <Checkbox />
                <p className={styles['login__container__form-area__form__checkbox__text']}>
                  Lembrar minha senha
                </p>
              </Box>
              <Button
                variant="contained"
                fullWidth
                className={styles['login__container__form-area__form__button']}
<<<<<<< HEAD
=======
                sx={{
                  backgroundColor: colors.bluePrimary500, textTransform: "none"
                }}
>>>>>>> fa0f9d98927fa9d1bef3df5e214280aeca74b432
              >
                Entrar
              </Button>
              <Box className={styles['login__container__form-area__form__redirect']}>
                <p className={styles['login__container__form-area__form__redirect__text']}>
                  Ainda não tem uma conta?{" "}
                  <Link
                    className={styles['login__container__form-area__form__redirect__text__link']}
                    href="http://localhost:3000/cadastro"
                  >
                    Cadastre-se
                  </Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles['login__container-side']}>
          <Image
            src="/undraw_transfer-money.svg"
            width={467}
            height={448}
            alt="Bem Vindo"
            className="login__container-side__image"
<<<<<<< HEAD
=======
            style={{ width: "40%", height: "auto" }}
>>>>>>> fa0f9d98927fa9d1bef3df5e214280aeca74b432
          />
          <h2 className={styles['login__container-side__title']}>Seja bem-vindo!</h2>
          <h3 className={styles['login__container-side__description']}>
            Descubra soluções financeiras inovadoras e confiáveis para garantir
            um futuro próspero
          </h3>
        </Box>
      </main>
    </>
  );
}
