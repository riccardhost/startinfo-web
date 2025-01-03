
import React, { useState, useEffect } from 'react';
import '../styles/Carrossel.css';

// Importe as imagens diretamente
import imagem1 from './images/1.jpg';
import imagem2 from './images/2.jpg';
import imagem3 from './images/3.jpg';
import imagem4 from './images/4.jpg';

const imagens = [imagem1, imagem2, imagem3, imagem4];

const Carrossel = () => {
    
  const [indice, setIndice] = useState(0);

  // Função para mudar para a próxima imagem
  const proximaImagem = () => {
    setIndice((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  // Função para voltar para a imagem anterior
  const imagemAnterior = () => {
    setIndice((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
  };

  // Efeito para alterar a imagem automaticamente a cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(proximaImagem, 3000); // 3000ms = 3 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (

    <div className="carrossel">

      <button className="prev" onClick={imagemAnterior}> ❮ </button>

        <div className="carrossel-imagem">

          <img src={imagens[indice]} alt={`Imagem ${indice + 1}`} />

        </div>

      <button className="next" onClick={proximaImagem}> ❯ </button>

    </div>

  );
  
};

export default Carrossel;
