import React from 'react';
import '../styles/Tutoriais.css';
import pix from "../assets/pix.png";
import whatsApp from "../assets/whatsapp.png";
import email from "../assets/email.png";

function Tutoriais() {

  return (

    <section id="tutoriais">

      <div className="tituloTutorial">

          <h2>Tutoriais</h2>

          <p>

          Aprenda a usar a tecnologia no seu dia a dia, da melhor forma possível:

          </p>

      </div>

      <div className="cards">

        <div className="card">
          <h3>Aprenda a Usar o PIX!</h3>
          <img src={pix}
          alt="Logomarca do Pix"
          className="pix"
          />
          <p>Com esse passo a passo, você estará apto a fazer e receber pagamentos via PIX de forma fácil e rápida! Lembre-se de que, para manter sua segurança, sempre verifique as informações antes de finalizar qualquer transação e nunca compartilhe dados pessoais de maneira insegura.</p>
        </div>

        <div className="card">
          <h3>Aprenda a Usar o WhatsApp</h3>
          <img src={whatsApp}
          alt="Logomarca do WhatsApp"
          className="whatsapp"
          />
          <p>Pratique suas novas habilidades com exercícios.</p>
        </div>

        <div className="card">
          <h3>Aprenda a Usar o E-mail</h3>
          <img src={email}
          alt="Logomarca do E-mail"
          className="email"
          />
          <p>Conecte-se com outros aprendizes e compartilhe experiências.</p>
        </div>

      </div>

    </section>

  );
  
}

export default Tutoriais;
