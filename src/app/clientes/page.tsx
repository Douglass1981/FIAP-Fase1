"use client";


import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useState } from "react";


export default function clientes() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [erroCadastro, setErroCadastro] = useState("");

   const handleCadastroUser = async () => {
    try {
      const response = await fetch('/api/CadastroUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Cadastro realizado com sucesso!', data);
        setCadastroSucesso(true);
        setErroCadastro('');
        // Opcional: Redirecionar o usuário ou limpar o formulário
      } else {
        console.error('Erro ao cadastrar:', data.message || 'Erro desconhecido');
        setErroCadastro(data.message || 'Ocorreu um erro ao cadastrar.');
        setCadastroSucesso(false);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErroCadastro('Erro ao conectar com o servidor.');
      setCadastroSucesso(false);
    }
  };
   
  return (
    <div className="container">
      <div className="lado-esquerdo">
        <div className="logoTitulo">
          <Image src="/logo.png" width="72" height="72" alt="Logo" />
          <p>Poup.ai</p>
        </div>
        <div className="acesse">Acesse</div>
        <div className="login">Com seus dados pessoais</div>
        <div className="dados">Nome</div>

        <div className="dadostext">
          <TextField
            id="nome"
            label="Digite seu Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="dados">E-mail</div>
        <div className="dadostext">
          <TextField
            id="email"
            label="Digite seu E-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="dados">Senha</div>
        <div className="dadostext">
          <TextField
            id="senha"
            label="Digite sua Senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn" onClick={handleCadastroUser}>
          Cadastrar
        </button>
        {cadastroSucesso && <p style={{ color: 'green', textAlign: "center" }}>Cadastro realizado com sucesso!</p>}
        {erroCadastro && <p style={{ color: 'red' }}>{erroCadastro}</p>}

      </div>

      <div className="lado-direito">
        <div className="logoBemVindo">
          <Image
            src="/logoCadastro.png"
            width="520"
            height="410"
            alt="Info Cadastro"
          />
        </div>
      </div>
    </div>
  );
}
