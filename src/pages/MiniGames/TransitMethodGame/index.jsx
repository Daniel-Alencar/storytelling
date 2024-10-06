





import React, { useState, useEffect } from 'react';

// Função para gerar luminosidade randomicamente para os corpos normais
function getRandomLuminosity() {
  return Math.random() * 10 + 90; // Luminosidade varia entre 80 e 100
}

function TransitMethodGame() {
  const [luminosityGroup, setLuminosityGroup] = useState([]);
  const [score, setScore] = useState(0); // Pontuação do jogador
  const [correctBody, setCorrectBody] = useState(null); // Índice do corpo correto (contém o exoplaneta)
  const [blinkingLuminosity, setBlinkingLuminosity] = useState(100); // Luminosidade que pisca do exoplaneta
  const [positions, setPositions] = useState([]); // Posições randomizadas das estrelas

  // Função que inicializa o jogo, definindo luminosidade para cada corpo e qual é o exoplaneta
  const initializeGame = () => {
    const group = [];
    const newPositions = [];
    for (let i = 0; i < 15; i++) {
      group.push(getRandomLuminosity());
      newPositions.push({
        left: Math.random() * 90 + 'vw', // Posição horizontal aleatória (máximo de 90vw)
        top: Math.random() * 30 + 'vh', // Posição vertical aleatória na parte de cima da tela (máximo de 30vh)
      });
    }

    // Definimos um corpo aleatório que terá o efeito de trânsito (exoplaneta piscando)
    const randomBody = Math.floor(Math.random() * 8);
    group[randomBody] = 100; // Definimos inicialmente a luminosidade do exoplaneta (máxima, antes de piscar)
    
    setLuminosityGroup(group);
    setCorrectBody(randomBody); // Salvamos qual corpo tem o exoplaneta
    setPositions(newPositions); // Salvamos as posições aleatórias
  };

  // Inicializamos o jogo ao carregar o componente
  useEffect(() => {
    initializeGame();
  }, []);

  // Função para simular o "piscar" do exoplaneta com periodicidade
  useEffect(() => {
    let interval;
    if (correctBody !== null) {
      interval = setInterval(() => {
        // Alterna a luminosidade do corpo exoplaneta entre 100 e 75-80 (simulando o trânsito)
        setBlinkingLuminosity(prevLuminosity => 
          prevLuminosity === 100 ? Math.random() * 5 + 55 : 100
        );
      }, 1000); // Pisca a cada 1 segundo
    }

    return () => clearInterval(interval);
  }, [correctBody]);

  const handleClick = (bodyIndex) => {
    // Verificamos se o jogador clicou no corpo correto
    if (bodyIndex === correctBody) {
      setScore(score + 1);
      alert("Você acertou! Um possível exoplaneta foi detectado!");
    } else {
      alert("Tente novamente. Esse não contém um exoplaneta.");
    }

    // Reinicializamos o jogo após cada tentativa
    initializeGame();
  };

  return (
    <div style={styles.background}>
      {/* Renderizando o grupo de 8 corpos */}
      <div style={styles.groupContainer}>
        {luminosityGroup.map((luminosity, bodyIndex) => (
          <div
            key={bodyIndex}
            onClick={() => handleClick(bodyIndex)}
            style={{
              ...styles.body,
              position: 'absolute',
              left: positions[bodyIndex]?.left,
              top: positions[bodyIndex]?.top,
              opacity: bodyIndex === correctBody ? blinkingLuminosity / 100 : luminosity / 100,
              backgroundImage: 'url(src/assets/MinigameTransito/star_game1.png)', // Substitua com o caminho da sua imagem de estrela
            }}
          ></div>
        ))}
      </div>
      <p style={{ color: 'white' }}>Pontuação: {score}</p>
    </div>
  );
}


const styles = {
    background: {
        backgroundImage: 'url(src/assets/MinigameTransito/background_game1.webp)', // Imagem de fundo
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Necessário para que os corpos sejam posicionados de forma absoluta
    },
    groupContainer: {
        position: 'relative',
        width: '100%',
        height: '100%', // O container cobre toda a tela
    },
    body: {
        cursor: 'pointer',
        width: '60px',
        height: '60px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        border: 'none', // Removendo borda
    },
};

export default TransitMethodGame;