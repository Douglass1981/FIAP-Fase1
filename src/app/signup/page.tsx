"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import Link from "@mui/material/Link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MyButton from "@/components/Button";
import styles from "./signup.styles.module.scss";

export default function Cadastro() {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [erroCadastro, setErroCadastro] = useState("");

  const router = useRouter(); // Inicialize o useRouter

  const handleCadastroUser = async () => {
    // Validação de campos obrigatórios
    if (!nome || !email || !password) {
      setErroCadastro("Por favor, preencha todos os campos.");
      setCadastroSucesso(false);
      return; // Interrompe a execução se houver campos vazios
    }
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
        setName("");
        setEmail("");
        setPassword("");
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
  // --- Novo código para redirecionamento ---
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (cadastroSucesso) {
      timer = setTimeout(() => {
        router.push("http://localhost:3000/login"); // Redireciona para a página de login
      }, 2000); // 2000 milissegundos = 2 segundos
    }

    // Limpa o timer se o componente for desmontado ou se cadastroSucesso mudar para false
    return () => clearTimeout(timer);
  }, [cadastroSucesso, router]); // Dependências do useEffect

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <>
      <main className={styles["signup"]}>
        <Box className={styles["signup__container"]}>
          <Link
            className={styles["signup__container__logo_area"]}
            href="http://localhost:3000"
            sx={{ textDecoration: "none" }}
          >
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
            )}{" "}
            <h1 className={styles["signup__container__logo_area__brand"]}>
              Poup.ai
            </h1>
          </Link>

          <Box className={styles["signup__container__form-area"]}>
            <Box className={styles["signup__container__form-area__text"]}>
              <h2
                className={styles["signup__container__form-area__text__title"]}
              >
                Cadastre-se
              </h2>
              <h3
                className={
                  styles["signup__container__form-area__text__subtitle"]
                }
              >
                Com seus dados pessoais
              </h3>
            </Box>
            <Box className={styles["signup__container__form-area__form"]}>
              <TextField
                id="name"
                label="Nome"
                placeholder="Digite seu nome"
                variant="outlined"
                fullWidth
                value={nome}
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
                <p
                  className={
                    styles["signup__container__form-area__form__success"]
                  }
                >
                  Cadastro realizado com sucesso!
                </p>
              )}
              {erroCadastro && (
                <p
                  className={
                    styles["signup__container__form-area__form__error"]
                  }
                >
                  {erroCadastro}
                </p>
              )}

              <MyButton
                label="Cadastrar"
                onClick={handleCadastroUser}
                href=""
                fullWidth
              />
              <Box
                className={
                  styles["signup__container__form-area__form__redirect"]
                }
              >
                <p
                  className={
                    styles["signup__container__form-area__form__redirect__text"]
                  }
                >
                  Já possui uma conta?{" "}
                  <Link
                    className={
                      styles[
                        "signup__container__form-area__form__redirect__text__link"
                      ]
                    }
                    href="http://localhost:3000/login"
                  >
                    Login
                  </Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles["signup__container-side"]}>
          <Image
            src="/undraw_crypto.svg"
            width={467}
            height={448}
            alt="Bem Vindo"
            style={{
              width: "60%",
              height: "auto",
            }}
          />
          <h3 className={styles["signup__container-side__description"]}>
            Controle total das suas finanças, a qualquer hora, em qualquer
            lugar.
          </h3>
        </Box>
      </main>
    </>
  );
}
