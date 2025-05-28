
"use client";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Alert,
  FormControlLabel,
} from "@mui/material"; // Adicione FormControlLabel
import Image from "next/image";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react"; // Importe useEffect
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./login.styles.module.scss";
import { colors } from "../mui.styles";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Novo estado para o checkbox
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  // useEffect para carregar o email salvo se "Lembrar-me" foi marcado anteriormente
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); // Marca o checkbox se houver um email salvo
    }
  }, []); // Executa apenas uma vez ao montar o componente

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
          if(data.user && data.user.nome){
            localStorage.setItem("userName", data.user.nome);
          } else {
            console.warn("Usuario não encontrado");
          }


        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("isLoggedIn", "true");
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userName");
          localStorage.removeItem("userEmail");
        }

        router.push("/home"); // Redireciona para a página home
      } else {
        setError(data.error || "Erro desconhecido ao fazer login.");
      }
    } catch (err) {
      console.error("Erro na requisição de login:", err);
      setError(
        "Não foi possível conectar ao servidor. Tente novamente mais tarde."
      );
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
                {/* Use FormControlLabel para o checkbox com label */}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe} // Conecta ao estado 'rememberMe'
                      onChange={(e) => setRememberMe(e.target.checked)} // Atualiza o estado
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

              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={loading}
                className={styles["login__container__form-area__form__button"]}
                sx={{
                  backgroundColor: colors.bluePrimary500,
                  textTransform: "none",
                  mt: 2,
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Entrar"
                )}
              </Button>
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
                    href="/signup"
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
