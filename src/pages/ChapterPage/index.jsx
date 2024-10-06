import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import NextButton from '../../components/NextButton';

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

export default function ChapterPage({ name }) {
  // Estado para o texto sendo "digitado"
  const [displayedName, setDisplayedName] = useState('');  
  const [completedName, setCompletedName] = useState(
    repeatSecondCharacter(name)
  );

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < (completedName.length - 1)) {
        // Adiciona uma letra ao texto
        setDisplayedName((prev) => prev + completedName[currentIndex]); 
        console.log(displayedName); 
        currentIndex++;
      } else {
        // Para o intervalo quando todo o texto for exibido
        clearInterval(intervalId);  
      }
    }, 100); // Velocidade da digitação em milissegundos

    // Limpa o intervalo quando o componente desmonta
    return () => clearInterval(intervalId);  
  }, [completedName]);

  return (
    <>
      <div className={styles.App}>
        <div className={styles.background}>
          <div className={styles.contentContainer}>
            <p className={styles.name}>{displayedName}</p>
          </div>
        </div>
      </div>
      <NextButton 
        text={'Próximo'}
        onClick={() => {}}
      />
    </>
  );
}
