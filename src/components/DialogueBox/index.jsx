
import styles from './styles.module.css';

export default function DialogueBox({ title, text }) {
  return (
    <div className={styles['dialogue-box']}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}

