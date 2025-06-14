"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Checkbox, Alert, FormControlLabel } from "@mui/material";

import {
  TextField,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import MyButton from "@/components/Button";
import { ROUTES } from "@/constants";
import { colors } from "../mui.styles";
import styles from "./login.styles.module.scss";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.user && data.user.nome) {
          localStorage.setItem("userName", data.user.nome);
          localStorage.setItem("userEmail", data.user.email);
          localStorage.setItem("isLoggedIn", "true");
        } else {
          console.warn(
            "Informações do usuário (nome) não encontradas na resposta da API."
          );
          localStorage.removeItem("userName");
          localStorage.removeItem("userEmail");
          localStorage.removeItem("isLoggedIn");
        }

        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        router.push("/home");
      } else {
        setError(data.error || "Erro desconhecido ao fazer login.");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("rememberedEmail");
      }
    } catch (err) {
      console.error("Erro na requisição de login:", err);
      setError(
        "Não foi possível conectar ao servidor. Tente novamente mais tarde."
      );
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("rememberedEmail");
    } finally {
      setLoading(false);
    }
  };

  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <>
      <main className={styles["login"]}>
        <Box className={styles["login__container"]}>
          <Link
            className={styles["login__container__logo_area"]}
            href={ROUTES.DEFAULT}
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
                style={{ width: "20%", height: "auto" }}
              />
            )}
            <h1 className={styles["login__container__logo_area__brand"]}>
              Poup.ai
            </h1>
          </Link>

          <Box className={styles["login__container__form-area"]}>
            <Box className={styles["login__container__form-area__text"]}>
              <h2
                className={styles["login__container__form-area__text__title"]}
              >
                Acesse
              </h2>
              <h3
                className={
                  styles["login__container__form-area__text__subtitle"]
                }
              >
                Com seu login e senha
              </h3>
            </Box>
            <Box
              className={styles["login__container__form-area__form"]}
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                id="email"
                label="Email"
                placeholder="Digite seu email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                id="password"
                label="Senha"
                placeholder="Digite sua senha"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
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
              <Box
                className={
                  styles["login__container__form-area__form__checkbox"]
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      sx={{
                        "&.Mui-checked": {
                          color: colors.bluePrimary500,
                        },
                      }}
                    />
                  }
                  label={
                    <p
                      className={
                        styles[
                          "login__container__form-area__form__checkbox__text"
                        ]
                      }
                    >
                      Lembrar meu Acesso
                    </p>
                  }
                />
              </Box>

              {error && (
                <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
                  {error}
                </Alert>
              )}
              <MyButton
                label="Entrar"
                fullWidth
                type="submit"
                disabled={loading}
              />

              <Box
                className={
                  styles["login__container__form-area__form__redirect"]
                }
              >
                <p
                  className={
                    styles["login__container__form-area__form__redirect__text"]
                  }
                >
                  Ainda não tem uma conta?{" "}
                  <Link
                    className={
                      styles[
                        "login__container__form-area__form__redirect__text__link"
                      ]
                    }
                    href={ROUTES.SIGNUP}
                  >
                    Cadastre-se
                  </Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles["login__container-side"]}>
          <Image
            src="/undraw_transfer-money.svg"
            width={467}
            height={448}
            alt="Bem Vindo"
            className="login__container-side__image"
            style={{ width: "40%", height: "auto" }}
          />
          <Box className={styles["login__container-side__text"]}>
            <h2 className={styles["login__container-side__text__title"]}>
              Seja bem-vindo!
            </h2>
            <h3 className={styles["login__container-side__text__description"]}>
              Descubra soluções financeiras inovadoras e confiáveis para
              garantir um futuro próspero
            </h3>
          </Box>
        </Box>
      </main>
    </>
  );
}
