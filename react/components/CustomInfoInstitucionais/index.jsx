import React from "react";
import "./styles.css";

const CustomInfoInstitucionais = () => {
  return (
    <div className="container">



      <div className="atendimento">

        <div className="infoCard">
          <h3>ATENDIMENTO POR TELEFONE</h3>
          <p>
            Nosso horário de atendimento:<br />
            Segunda a quinta: 7h às 17h30 <br />
            Sexta: 7h às 17h <br />
            Sábados: 8h às 12h <br />
          </p>
          <p>SP: (11) 2081-3333</p>
        </div>

        <div className="infoCard">
          <h3>ATENDIMENTO POR EMAIL</h3>
          <p>Envie sua mensagem que em breve retornaremos o contato

          </p>
          <form className="form">
            <input className="input-form" type="text" placeholder="Seu nome" required />
            <input className="input-form" type="email" placeholder="Seu email" required />
            <textarea className="input-form-text" placeholder="Sua mensagem" required />
            <div className="container-button">
              <a href="/">Voltar para home</a>
              <button className="input-form-button" type="submit">ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomInfoInstitucionais;
