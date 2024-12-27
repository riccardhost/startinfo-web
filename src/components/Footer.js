import React from 'react';
import "../styles/Footer.css"; // Importe o arquivo CSS para os estilos
import whatsapp from "../assets/whatsapp.ico"; // Importa a logomarca

function Footer() {

  return (

    <footer id="contact">

      <div className="container_footer">

        <div className="footer-row">

          <div className="footer-links">
            <h4>Institucional</h4>
            <ul>
              <li><a href="/">Sobre nós</a></li>
              <li><a href="/">Termos de Uso</a></li>
              <li><a href="/">Política de Privacidade</a></li>
              <li><a href="/">Mapa do Site</a></li>
            </ul>
          </div>

          <div className="footer-links">

            <h4>Fale Conosco!</h4>

            <ul>
              <li><a href="mailto:suporte@letramentodigital.com">Via E-mail</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=numbercel">Via WhatsApp</a></li>
            </ul>

          </div>

          <div className="footer-links">

            <h4>Siga-nos!</h4>

            <ul className="social-links">
              <li><a href="/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="/"><i className="fab fa-youtube"></i></a></li>
              <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
            </ul>

          </div>

        </div>

      </div>

      <div className="whatsapp-icon">
          <img src={whatsapp} alt="WhatsApp"/>
      </div>

      <p> © 2024 Letramento Digital | TODOS OS DIREITOS RESERVADOS. </p>

    </footer>

  );

};

export default Footer;
