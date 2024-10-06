import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import NextButton from '../../components/NextButton';

import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';


function repeatSecondCharacter(str) {
  // Verifica se a string tem pelo menos dois caracteres
  if (str.length < 2) {
    // Retorna a string original se tiver menos de dois caracteres
    return str;
  }
  // Acessa o segundo caractere (índice 1)
  const secondChar = str[1];

  // Cria a nova string com o segundo caractere repetido
  const newString = str[0] + secondChar + secondChar + str.slice(2);

  return newString;
}

export default function DescriptionPage({ text }) {

  const location = useLocation();
  const { chapterName } = location.state || {};

  // Estado para o texto sendo "digitado"
  const [displayedText, setDisplayedText] = useState('');  
  const [completedName, setCompletedName] = useState(
    text
  );

  const navigate = useNavigate();

  const handleToStoryPage = () => {
    navigate('/');
  }

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < (completedName.length - 1)) {
        // Adiciona uma letra ao texto
        setDisplayedText((prev) => prev + completedName[currentIndex]); 
        console.log(displayedText); 
        currentIndex++;
      } else {
        // Para o intervalo quando todo o texto for exibido
        clearInterval(intervalId);  
      }
    }, 50); // Velocidade da digitação em milissegundos

    // Limpa o intervalo quando o componente desmonta
    return () => clearInterval(intervalId);  
  }, [completedName]);

  return (
    <>
      <div className={styles.App}>
        <div className={styles.background}>
          <div className={styles.contentContainer}>
            <p className={styles.name}>{displayedText}</p>
          </div>
        </div>
      </div>

      <BackButton
        text={'Voltar'}
        onClick={handleToStoryPage}
      />
      <NextButton 
        text={'Próximo'}
        onClick={handleToStoryPage}
      />
    </>
  );
}
