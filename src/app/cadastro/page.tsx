"use client";

import theme from "@/styles/theme";
import {Box, Button, Checkbox, IconButton, InputAdornment, TextField, useMediaQuery} from "@mui/material";
import { useState } from "react";
import styles from "./signup.styles.module.scss";
import Image from "next/image";
import Link from "@mui/material/Link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {colors} from "../mui.styles"


export default function Cadastro() {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [erroCadastro, setErroCadastro] = useState("");

  const handleCadastroUser = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ nome, email, password }),
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

<<<<<<< HEAD
  const [showPassword, setShowPassword] = useState(false);
=======
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={8}
        columns={16}
        direction="row"
        style= { isMobile ? {height: "83vh"} : {height: "100vh"}}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
          ...(isMobile && {
            backgroundColor: "#002952",
           
            color: "#ffffff",
            paddingTop: "10px",
          }),
        }}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <div style={{ justifyItems: "center",
             paddingTop: isMobile?  "200px" : "250px",
             display:"flex" }}>
            <Image
              src="/logo.png"
              width={isMobile ? 232 : 72}
              height={isMobile ? 232 : 72}
              alt="Logo"
            />
            <div
              style={{
                marginTop: "8px",
                fontSize: isMobile ? "0" : "64px",
                fontWeight:"bold",
                display:"flex"
              }}
            >
              Poup.ai
            </div>{" "}
           
          </div>
          <div
            style={{
              fontSize: isMobile ? "24px" : "36px",
              fontWeight: "bold",
              marginTop: "30px",
              
            }}
          >
            Acesse
          </div>{" "}
        
          <div style={{ fontSize: isMobile ? "18px" : "24px" }}>
            Com seus dados pessoais
          </div>{" "}
        
          <div style={{ fontSize: "18px",
                         marginTop: "20px",
                         color: isMobile? "black" : "black", }}>Nome</div>
          
          <div>
            <TextField
              id="nome"
              label="Digite seu Nome"
              variant="outlined"
              fullWidth
              value={nome}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ fontSize: "18px",
                  color: isMobile? "black" : "black",
           }}>Email</div>
          <div>
            <TextField
              id="email"
              label="Digite seu E-mail"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ fontSize: "18px",
          color: isMobile? "black" : "black",
>>>>>>> dev

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

   const isMobile = useMediaQuery("(max-width:767px)");


  return (
    <>
      <main className={styles['signup']}>
        <Box className={styles['signup__container']}>
          <Box className={styles['signup__container__logo_area']}>
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
                sx={{ backgroundColor: colors.bluePrimary500, textTransform: 'none' }}
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
            style={{
              width: "60%",
              height: "auto",
            }}
          />
          <h3 className={styles['signup__container-side__description']}>
            Controle total das suas finanças, a qualquer hora, em qualquer lugar.
          </h3>
        </Box>
      </main>
    </>
  );
}
