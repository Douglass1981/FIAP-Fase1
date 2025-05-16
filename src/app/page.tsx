"use client";

import theme from "@/styles/theme";
import { Checkbox, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useState } from "react";

export default function HOME() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={8}
        columns={16}
        direction="row"
        style={{ height: "100vh" }}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
          
        }}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <div style={{ justifyItems: "center", paddingTop: "250px" }}>
            <Image src="/logo.png" width="72" height="72" alt="Logo" />
             <div>Poup.ai</div>
          </div>
         
          <div>
            <div style={{ fontSize: "36px", fontWeight: "bold" }}>Acesse</div>
            <div style={{ fontSize: "24px" }}>Com seu login e senha</div>
            <div style={{ fontSize: "18px" }}>Email</div>
          </div>
          <div>
            <TextField
              id="email"
              label="Digite seu E-mail"
              variant="outlined"
              fullWidth
            />
          </div>
          <div style={{ fontSize: "18px" }}>Senha</div>
          <div>
            <TextField
              id="senha"
              label="Digite sua Senha"
              variant="outlined"
              fullWidth
            />{" "}
          </div>

          <div>
            <Checkbox style={{ fontSize: "18px" }} />
            Lembrar a minha senha
          </div>

          <Button variant="outlined" fullWidth>
            Entrar
          </Button>

          <div
            style={{ fontSize: "16px", textAlign: "center", padding: "10px" }}
          >
            Ainda não tem uma conta?
            <Link href="http://localhost:3000/cadastro">Cadastre-se</Link>
          </div>
        </Grid>

        <Grid
          size={{ xs: 16, md: 8 }}
          sx={{
            backgroundColor: "#002952",
            color: "#ffffff",
            justifyItems: "center",
          }}
        >
          <div style={{ justifyItems: "center", paddingTop: "200px" }}>
            <Image
              src="/logoBemVindo.png"
              width={467}
              height={448}
              alt="Bem Vindo"
            />
          </div>
          <div
            style={{
              justifyItems: "center",
              fontSize: "60px",
              fontWeight: "bold",
            }}
          >
            Bem Vindo!
          </div>
          <div
            style={{
              justifyItems: "center",
              fontSize: "24px",
            }}
          >
            <h1>Descubra soluções financeiras inovadoras</h1>
            <h1>e confiávies para garantir um futuro</h1>
            <h1>próspero</h1>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
