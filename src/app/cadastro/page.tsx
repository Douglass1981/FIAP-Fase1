"use client";

import theme from "@/styles/theme";
import {Box, Button, Checkbox, IconButton, InputAdornment, TextField, useMediaQuery} from "@mui/material";
import { useState } from "react";
import styles from "./signup.styles.module.scss";
import Image from "next/image";
import Link from "@mui/material/Link";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [erroCadastro, setErroCadastro] = useState("");

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCadastroUser = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Cadastro realizado com sucesso!", data);
        setCadastroSucesso(true);
        setErroCadastro("");
        // Opcional: Redirecionar o usuário ou limpar o formulário
      } else {
        console.error(
          "Erro ao cadastrar:",
          data.message || "Erro desconhecido"
        );
        setErroCadastro(data.message || "Ocorreu um erro ao cadastrar.");
        setCadastroSucesso(false);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErroCadastro("Erro ao conectar com o servidor.");
      setCadastroSucesso(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <>
      <main className={styles['signup']}>
        <Box className={styles['signup__container']}>
          <Box className={styles['signup__container__logo_area']}>
            <Image src="/logo.png" width="72" height="100" alt="Logo" className="signup__container__logo_area__image" />
            <h1 className={styles['signup__container__logo_area__brand']}>Poup.ai</h1>
          </Box>

          <Box className={styles['signup__container__form-area']}>
<Box className={styles['signup__container__form-area__text']}>
              <h2 className={styles['signup__container__form-area__text__title']}>
                Cadastre-se
              </h2>
              <h3 className={styles['signup__container__form-area__text__subtitle']}>
                Com seus dados pessoais
              </h3>
            </Box>
            <Box className={styles['signup__container__form-area__form']}>
              <TextField
                id="name"
                label="Nome"
                placeholder="Digite seu nome"
                variant="outlined"
                fullWidth
                value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                placeholder="Digite seu email"
                variant="outlined"
                fullWidth
                value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

              {cadastroSucesso && (
            <p className={styles['signup__container__form-area__form__success']}>
              Cadastro realizado com sucesso!
            </p>
          )}
          {erroCadastro && (
            <p className={styles['signup__container__form-area__form__error']}>{erroCadastro}</p>
          )}
              
              <Button
                variant="contained"
                fullWidth
                className={styles['signup__container__form-area__form__button']}
                onClick={handleCadastroUser}
              >
                Entrar
              </Button>
              <Box className={styles['signup__container__form-area__form__redirect']}>
                <p className={styles['signup__container__form-area__form__redirect__text']}>
                  Já possui uma conta?{" "}
                  <Link
                    className={styles['signup__container__form-area__form__redirect__text__link']}
                    href="http://localhost:3000/"
                  >
                    Login
                  </Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles['signup__container-side']}>
          <Image
            src="/undraw_crypto.svg"
            width={467}
            height={448}
            alt="Bem Vindo"
            className="signup__container-side__image"
          />
          <h3 className={styles['signup__container-side__description']}>
            Controle total das suas finanças, a qualquer hora, em qualquer lugar.
          </h3>
        </Box>
      </main>
    </>
  );
}
