import React, { useState } from 'react';
import { Container, Img, TextoFrase, Botao, BtnArea, BtnTexto } from './src/styles';

function App() {
  const [imgSrc, setImgSrc] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.'
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
    setImgSrc(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setImgSrc(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <Container>
      <Img source={imgSrc} />
      <TextoFrase>{textoFrase}</TextoFrase>

      <Botao onPress={quebraBiscoito}>
        <BtnArea>
          <BtnTexto>Quebrar biscoito</BtnTexto>
        </BtnArea>
      </Botao>

      <Botao onPress={reiniciar}>
        <BtnArea>
          <BtnTexto style={{ color: '#121212' }}>Reiniciar biscoito</BtnTexto>
        </BtnArea>
      </Botao>
    </Container>
  );
}

export default App;
