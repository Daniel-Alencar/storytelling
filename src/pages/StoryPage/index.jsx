import styles from './styles.module.css';
import DialogueBox from '../../components/DialogueBox';
import NextButton from '../../components/NextButton';
import { story } from '../../utils/story';
import { useState, useEffect } from 'react';
import BackButton from '../../components/BackButton';

export default function StoryPage() {
  // Carrega o índice da história do localStorage (ou usa 0 se não houver)
  const savedIndex = localStorage.getItem('storyIndex') 
    ? parseInt(localStorage.getItem('storyIndex')) 
    : 0;
  const [storyIndex, setStoryIndex] = useState(savedIndex);

  // Função para atualizar o índice e salvar no localStorage
  const changeBackStoryIndex = () => {
    const newIndex = storyIndex - 1;
    if (newIndex >= 0) {
      setStoryIndex(newIndex);
      // Salva o progresso no localStorage
      localStorage.setItem('storyIndex', newIndex); 
    }
  };

  // Função para atualizar o índice e salvar no localStorage
  const changeNextStoryIndex = () => {
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
      <div 
        className={styles.background} 
        style={{ 
          // Define a imagem de fundo dinamicamente
          backgroundImage: `url(${story[storyIndex].backgroundImage})`, 
          backgroundSize: 'cover',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          position: 'relative'
        }}
      >
        <div className={styles.character}>
          <img 
            // Define a imagem do personagem dinamicamente
            src={story[storyIndex].characterImage}
            alt="Character" 
            className={styles.characterImg}
          />
        </div>
        
        <DialogueBox 
          title={story[storyIndex].title}
          text={story[storyIndex].description}
        />
      </div>

      <BackButton 
        text={"Voltar"}
        onClick={changeBackStoryIndex}
      />
      <NextButton 
        text={"Próximo"}
        onClick={changeNextStoryIndex}
      />
    </div>
  );
}
