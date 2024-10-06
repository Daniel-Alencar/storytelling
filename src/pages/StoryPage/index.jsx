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

  // Carrega o índice do capítulo do localStorage (ou usa 0 se não houver)
  const savedChapter = localStorage.getItem('storyChapter') 
    ? parseInt(localStorage.getItem('storyChapter')) 
    : 0;
  const [storyChapter, setStoryChapter] = useState(savedChapter);

  // Função para atualizar o índice e salvar no localStorage
  const changeBackStoryIndex = () => {
    let newIndex = storyIndex - 1;

    if (newIndex >= 0) {
      setStoryIndex(newIndex);
      // Salva o progresso no localStorage
      localStorage.setItem('storyIndex', newIndex); 
    } else {
      let newChapter = storyChapter - 1;
      newIndex = story[storyChapter - 1].conversations.length - 1;

      if(newChapter >= 0) {
        setStoryIndex(newIndex);
        setStoryChapter(newChapter);
        // Salva o progresso no localStorage
        localStorage.setItem('storyIndex', newIndex); 
        localStorage.setItem('storyChapter', newChapter); 
      }
    }
  };

  // Função para atualizar o índice e salvar no localStorage
  const changeNextStoryIndex = () => {
    let newIndex = storyIndex + 1;
    if (newIndex < story[storyChapter].conversations.length) {
      setStoryIndex(newIndex);
      // Salva o progresso no localStorage
      localStorage.setItem('storyIndex', newIndex); 
    } else {
      newIndex = 0;
      let newChapter = storyChapter + 1;

      if(newChapter < story.length) {
        setStoryIndex(newIndex);
        setStoryChapter(newChapter);
        // Salva o progresso no localStorage
        localStorage.setItem('storyIndex', newIndex); 
        localStorage.setItem('storyChapter', newChapter); 
      }
    }
  };

  // Função para carregar o progresso ao iniciar a página
  useEffect(() => {
    const storedIndex = localStorage.getItem('storyIndex');
    const storedChapter = localStorage.getItem('storyChapter');
    if (storedIndex) {
      setStoryIndex(parseInt(storedIndex));
    }
    if (storedChapter) {
      setStoryChapter(parseInt(storedChapter));
    }
  }, []);

  return (
    <div className={styles.App}>
      <div 
        className={styles.background} 
        style={{ 
          // Define a imagem de fundo dinamicamente
          backgroundImage: `url(
            ${story[storyChapter].conversations[storyIndex].backgroundImage}
          )`, 
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
            src={story[storyChapter].conversations[storyIndex].characterImage}
            alt="Character" 
            className={styles.characterImg}
          />
        </div>
        
        <DialogueBox 
          title={story[storyChapter].conversations[storyIndex].title}
          text={story[storyChapter].conversations[storyIndex].description}
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
