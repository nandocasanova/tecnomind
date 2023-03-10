import React from 'react';
import UncontrolledExample from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import RatingCard from '../../components/RatingCard/RatingCard';
import db from '../../data/db';
import deficientImg from '../../assets/'

function Home() {
  return (
    <>
      <Header />
      <h1>TECHNOMIND</h1>
      <UncontrolledExample />
      <h2>Avaliações Destaques</h2>
      {db.map((rate, index) => (
        <RatingCard
          key={index}
          image={rate.image}
          name={rate.name}
          description={rate.description}
        />
      ))}
      <button type='button'>Enviar Avaliação</button>
      <div>
        <figure>
          <img src="" alt="" />
        </figure>
        RECADO DE UM DEFICIENTE VISUAL!
        <button type='button'>Ler mais</button>
      </div>
    </>
  );
}

export default Home;
