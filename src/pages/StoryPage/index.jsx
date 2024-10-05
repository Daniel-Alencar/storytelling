import styles from './styles.module.css';
import characterImage from '../../assets/StoryPage/character.png';
import DialogueBox from '../../components/DialogueBox';
import NextButton from '../../components/NextButton';
import { story } from '../../utils/story';
import { useState, useEffect } from 'react';

export default function StoryPage() {
  // Carrega o índice da história do localStorage (ou usa 0 se não houver)
  const savedIndex = localStorage.getItem('storyIndex') 
    ? parseInt(localStorage.getItem('storyIndex')) 
    : 0;
  const [storyIndex, setStoryIndex] = useState(savedIndex);

  // Função para atualizar o índice e salvar no localStorage
  const changeStoryIndex = () => {
    const newIndex = storyIndex + 1;
    if (newIndex < story.length) {
      setStoryIndex(newIndex);
      // Salva o progresso no localStorage
      localStorage.setItem('storyIndex', newIndex); 
    }
  };

  // Função para carregar o progresso ao iniciar a página
  useEffect(() => {
    const storedIndex = localStorage.getItem('storyIndex');
    if (storedIndex) {
      setStoryIndex(parseInt(storedIndex));
    }
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.background}>
        <div className={styles.character}>
          <img 
            src={characterImage} 
            alt="Character" 
            className={styles.characterImg}
          />
        </div>
        
        <DialogueBox 
          title={story[storyIndex].title}
          text={story[storyIndex].description}
        />
      </div>

      <NextButton 
        text={"Próximo"}
        onClick={changeStoryIndex}
      />
    </div>
  );
}
