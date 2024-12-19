import React from 'react';
import '../styles/Home.css'; // Importa o CSS da pasta styles

function Home() {

  return (

    <section id="home">

      <div className="home-banner">

        <h2>Felicidade no Letramento Digital</h2>

        <p>

          Nosso objetivo é ajudar idosos a desenvolverem habilidades digitais
          de forma simples, prática e divertida.

        </p>

      </div>

      <div className="home-cards">

        <div className="card">
          <h3>Aprenda no seu ritmo</h3>
          <p>Tutoriais simples e fáceis de acompanhar.</p>
        </div>

        <div className="card">
          <h3>Atividades interativas</h3>
          <p>Pratique suas novas habilidades com exercícios.</p>
        </div>

        <div className="card">
          <h3>Comunidade acolhedora</h3>
          <p>Conecte-se com outros aprendizes e compartilhe experiências.</p>
        </div>

      </div>

    </section>

  );
  
}

export default Home;
