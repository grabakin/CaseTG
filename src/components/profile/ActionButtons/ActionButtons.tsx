import React from 'react';
import styles from './ActionButtons.module.css';

const ActionButtons: React.FC = () => {
  const handlePaymentsClick = () => {
    console.log('Payments clicked');
  };

  const handleStatisticsClick = () => {
    console.log('Statistics clicked');
  };

  return (
    <div className={styles.container}>
      <button className={styles.actionButton} onClick={handlePaymentsClick}>
        <span className={styles.buttonText}>Платежи</span>
      </button>
      <button className={styles.actionButton} onClick={handleStatisticsClick}>
        <span className={styles.buttonText}>Статистика</span>
      </button>
    </div>
  );
};

export default ActionButtons;
