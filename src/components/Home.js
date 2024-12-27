import React from 'react';
import '../styles/Home.css';
import idoso from "../assets/idoso3.png";
import atividades from "../assets/atividades.png";
import comunidade from "../assets/acolhimento2.png";
import casal_idosos from "../assets/casal_idosos-removebg.png";

function Home() {

  return (

    <section>

      <div className="titulo">

        <h2>Felicidade no Letramento Digital</h2>

        <p>

          Nosso objetivo é proporcionar aos idosos o desenvolvimento de habilidades digitais de maneira simples, 
          prática e prazerosa, promovendo autonomia e bem-estar através da tecnologia.

        </p>

      </div>

      <div className="cards">

        <div className="card">
          <h3>Aprenda no Seu Ritmo!</h3>
          <img src={idoso}
           alt="Logomarca do Pix"
           className="idoso"
           />
          <p>Tutoriais simples e fáceis de acompanhar.</p>
        </div>

        <div className="card">
          <h3>Atividades Interativas</h3>
          <img src={atividades}
           alt="Logomarca de Atividades"
           className="atividades"
           />
          <p>Pratique suas novas habilidades com exercícios.</p>
        </div>

        <div className="card">
          <h3>Comunidade Acolhedora</h3>
          <img src={comunidade}
           alt="Logomarca de Comunidade"
           className="comunidade"
           />
          <p>Conecte-se com outros aprendizes e compartilhe experiências.</p>
        </div>
        
        <div className="containerB">

          <div className="image">
                <img src={casal_idosos} alt="Imagem exemplo" />
          </div>

          <div className="text">
              <h1>Projeto Start Info</h1>
              <p>É um projeto focado no Letramento Digital para Idosos, com o objetivo de promover a inclusão digital e melhorar a qualidade de vida dessa população. Através deste projeto, buscamos ensinar aos idosos como utilizar a tecnologia de maneira segura e eficiente, permitindo que se conectem com o mundo digital e acessem uma variedade de serviços e recursos.</p>
          </div>

        </div>

      </div>

    </section>

  );
  
}

export default Home;
