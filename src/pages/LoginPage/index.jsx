import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onStart }) => {

  const navigate = useNavigate();

  const handleToStoryPage = () => {
    navigate('/prologue');
  }

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>Explore essa aventura</h1>
      <button className={styles['login-button']} onClick={handleToStoryPage}>
        Começar
      </button>
    </div>
  );
};

export default LoginPage;