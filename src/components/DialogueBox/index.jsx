
import { useEffect } from 'react';
import styles from './styles.module.css';

export default function DialogueBox({ title, text }) {

  return (
    <div className={styles['dialogue-box']}>
      <p 
        style={{ fontWeight: 'bold' }}
        className={styles.title}
      >
        {title}
      </p>
      <p className={styles.description}>{text}</p>
    </div>
  );
}

