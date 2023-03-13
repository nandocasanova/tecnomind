/* eslint-disable  */
import React from 'react';
import { useHistory } from 'react-router-dom';
import deficientImg from '../../assets/images/others/deficiente.jpg';
import UncontrolledExample from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import RatingCard from '../../components/RatingCard/RatingCard';
import db from '../../data/db';

function Home() {
  const history = useHistory();
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
      <button type='button' onClick={() => history.push('/rating')}>
        Enviar Avaliação
      </button>
      <div>
        <figure>
          <img src={deficientImg} alt='deficiente' />
        </figure>
        <h2>RECADO DE UM DEFICIENTE VISUAL!</h2>
        <p>
          Eu perdi um pouco de minha visão aos quatro anos. Bastante visão aos
          dezesseis e praticamente tudo do pouco que me restava uns três anos
          depois.
        </p>

        <p>
          Eu perdi um pouco de minha visão aos quatro anos. Bastante visão aos
          dezesseis e praticamente tudo do pouco que me restava uns três anos
          depois.
        </p>
        <p>
          Vou ser muito franco e sincero. Tive momentos difíceis na hora de
          estudar, na hora de querer namorar, na hora de querer dançar em uma
          festa.
        </p>
        <p>
          Não é fácil se adaptar ao mundo quando não se enxerga, mas é
          importante entender que poucas coisas realmente valiosas são fáceis.
        </p>
        <p>
          Rapidamente, percebi que tinha só duas opções. Eu podia ficar fechado
          em casa, chorando, porque era uma vítima, ou podia sair e viver a
          vida.
        </p>
        <p>
          Foi fácil entender isso intelectualmente. Emocionalmente, demorei um
          pouco para aceitar esta simples lógica.
        </p>
        <p>
          Ficando em casa, eu estaria garantindo que nada do que eu queria
          jamais seria possível.
        </p>
        <p>
          Eu queria trabalhar, ter responsabilidade, ser produtivo, ser amado,
          casar, ser independente. Nada disso me seria garantido se eu não me
          arriscasse e não fosse à luta.
        </p>
        <p>
          Mas, se eu ficasse me sentindo uma vítima, era certo que nunca teria
          nada do que queria. A decisão era fácil, embora a luta não fosse.
        </p>
        <p>
          Acredito que algo que sempre incomoda quando se está enfrentando um
          desafio, como a cegueira, é que acreditamos que tudo isso é injusto.
          Por que eu? Por que eu estou ficando cego?
        </p>
        <p>
          Com certeza, outras pessoas se perguntam outras coisas como: por que
          eu tenho câncer? Por que não tenho dinheiro? Por que não sou o homem
          mais bonito ou popular?
        </p>
        <p>
          O interessante, nisso tudo, é que sempre achamos que o nosso problema
          é o mais sério. Quando um jovem faz o maior drama, porque não tem a
          roupa da última moda ou um carro legal, temos vontade de rir.
        </p>
        <p>
          Com certeza, não rimos de alguém mais maduro que está com uma doença
          séria. Mas pensamos, silenciosamente, pelo menos ele viveu uma vida
          feliz. Ou, pelo menos ele enxergou a vida inteira e viu coisas lindas.
          E eu?
        </p>
        <p>
          O certo é que não damos valor a nada do que temos. Então, sempre
          parece que não temos nada. Só damos valor a coisas que perdemos, que
          antes nunca demos atenção.
        </p>
        <p>
          Quando estava fazendo mestrado em Washington, triste por algum motivo,
          nem sei se era porque, como cego, estava tendo dificuldades ou se meu
          computador estava com problemas, escutei, através do rádio, as
          notícias de um professor universitário na Califórnia que era
          tetraplégico.
        </p>
        <p>
          Como não podia usar seus braços e pernas, ele precisava pegar um lápis
          com sua boca e escrever no seu computador, apertando uma tecla de cada
          vez.
        </p>
        <p>
          Imagine: eu me sentindo a maior vítima. No entanto, eu podia andar por
          todo o campus, sem ajuda de ninguém, podia escrever mais rápido à
          máquina do que qualquer pessoa na minha sala.
        </p>
        <p>
          Aquele professor me ajudou a valorizar muitas coisas que eu não estava
          dando importância. Perguntei-me: o que é justo? O que é injusto?
        </p>
        <p>
          É justo eu ter pernas quando não as utilizo para ganhar medalhas nas
          olimpíadas? Ou não as uso para ajudar o próximo e nem sequer as
          valorizo?
        </p>
        <p>
          É justo eu ter um cérebro e não utiliza-lo ao máximo? É justo eu ter
          braços fortes e não usa-los para abraçar, demonstrar meu amor a quem,
          todos os dias, me dá tanto?
        </p>
        <p>
          É justo eu ter uma vida e não me lembrar de agradecer aos meus pais
          por me terem permitido nascer?
        </p>
        <p>
          Afinal, sabe-se de tantos que são mortos enquanto ainda são embriões
          ou fetos.
        </p>
        <p>
          É justo eu ter uma esposa, um curso universitário, um coração que
          pulsa, rins que funcionam, pulmões fortes, mãos rijas, e não me
          recordar de dizer ao meu Criador: obrigado, Deus, por me teres criado?
        </p>
        <p>
          A carta que acabamos de ler é de um jovem brasileiro, que trabalha em
          Nova Iorque há quatro anos.
        </p>
        <p>
          Sua filosofia pessoal, com certeza, não alentará somente aqueles que
          estão enfrentando a cegueira física, mas também a todos aqueles de
          nós, portadores da cegueira espiritual que não nos permite enxergar as
          bênçãos que recebemos diariamente. Pensemos nisso e mudemos o foco das
          nossas vidas de lutas, dissabores e dificuldades para vidas de
          oportunidades, testes e aprendizado.
        </p>

        <button type='button'>Ler mais</button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
