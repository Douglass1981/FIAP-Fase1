
import TextField from "@mui/material/TextField";
import Image from "next/image";

export default function clientes(){
    return(
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
                <TextField id="email" label="Digite seu E-mail" variant="outlined" />
              </div>
              <div className="dados">E-mail</div>
      
              <div className="dadostext">
                <TextField id="email" label="Digite seu E-mail" variant="outlined" />
              </div>
      
              <div className="dados">Senha</div>
      
              <div className="dadostext">
                <TextField id="senha" label="Digite sua Senha" variant="outlined" />
              </div>
      
              <button className="btn">Entrar</button>
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