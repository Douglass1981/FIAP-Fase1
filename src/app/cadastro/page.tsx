"use client";

import theme from "@/styles/theme";
import {
  Button,
  Checkbox,
  Grid,
  Link,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useState } from "react";

export default function Cadastro() {
  const [nome, setName] = useState("");
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

           }}>Senha</div>
          <div>
            <TextField
              id="senha"
              label="Digite sua Senha"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ paddingTop: "10px" }}>
            <Button variant="outlined" fullWidth onClick={handleCadastroUser}>
              Cadastrar
            </Button>
          </div>
          <div
            style={{ fontSize: "16px",
               textAlign: "center",
                padding: "10px",
              color: isMobile? "black" : "black" }}
          >
            Já possui uma conta?
            <Link href="http://localhost:3000/">Login</Link>
          </div>
          {cadastroSucesso && (
            <p style={{ color: "green", textAlign: "center" }}>
              Cadastro realizado com sucesso!
            </p>
          )}
          {erroCadastro && (
            <p style={{ color: "red", textAlign: "center" }}>{erroCadastro}</p>
          )}
        </Grid>
        <Grid
          size={{ xs: 16, md: 8 }}
          sx={{
            backgroundColor: "#002952",
            color: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
            ...(isMobile && { display: "none" }),
          }}
        >
          <div style={{ justifyItems: "center", paddingTop: "250px" }}>
            <Image
              src="/logoCadastro.png"
              width="556"
              height="410"
              alt="Info Cadastro"
            />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
