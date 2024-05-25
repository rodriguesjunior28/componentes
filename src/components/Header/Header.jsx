import React from 'react';
import leticiaImg from '../../assets/react-core-concepts.png';
import './Header.css';

const fisrtWord = ['Core','Crucial','Fundamental'];
function getRandomNumer(max) {
  return Math.floor(Math.random() * (max + 1));
};

//Possa dá qualquer nome pra imagem e tenho que colocar o alt mesmo que vázio
export const Header = () => {
  return (
    <header>   
      <img src={leticiaImg} alt="" />
      <h1>React Essentials</h1>
      <p>          
        {fisrtWord[getRandomNumer(2)]} Conceitos de React que você precisará para quase todos os aplicativos que você estiver
        vou construir!
      </p>        
    </header>
  );
}

//O getRandomNumer - faz com que as palavras que estão na variavel firstWord, mude a cada atualização da página