
import styles from './styles.module.css';

import characterImage from '../../assets/StoryPage/character.png';

import DialogueBox from '../../components/DialogueBox';

export default function StoryPage() {
  return (
    <div className={styles.App}>
      {/* Background image */}
      <div className={styles.background}>
        {/* Character image */}
        <div className={styles.character}>
          <img 
            src={characterImage} 
            alt="Character" 
            className={styles.characterImg}
          />
        </div>
        
        <DialogueBox 
          title={"O método de trânsito"}
          text={"O Método de Trânsito Ao se aproximar do sistema escolhido, os sensores começam a captar variações no brilho de uma estrela. O cientista-chefe, Dr. Orion, explica que isso pode significar que um planeta está passando na frente da estrela - um trânsito. A tripulação se anima, mas há tensão no ar. Todos os olhos estão em você para decidir o próximo passo."}
        />
      </div>
    </div>
  );
}

