import { CheckBox } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="lado-esquerdo">
        <div className="logoTitulo">
          <Image src="/logo.png" width="72" height="72" alt="Logo" />
          <p>Poup.ai</p>
        </div>
        <div className="acesse">Acesse</div>
        <div className="login">Com seu login e senha</div>
        <div className="dados">E-mail</div>

        <div className="dadostext">
          <TextField id="email" label="Digite seu E-mail" variant="outlined" />
        </div>

        <div className="dados">Senha</div>

        <div className="dadostext">
          <TextField id="senha" label="Digite sua Senha" variant="outlined" />
        </div>

        <div className="checkbox">
          <CheckBox name="Lembrar" />
          Lembrar a Minha senha
        </div>

        <button className="btn">Entrar</button>
      </div>

      <div className="lado-direito">
        <div className="logoBemVindo">
          <Image
            src="/logoBemVindo.png"
            width="466"
            height="448"
            alt="Bem Vindo"
          />
        </div>
        <div className="titulo">Bem Vindo!</div>
        <div className="subtitulo">
          <p>Descubra soluções financeiras inovadoras</p>
          <p>e confiávies para garantir um futuro</p>
          <p>próspero</p>
        </div>
      </div>
    </div>
  );
}
