import React from 'react';
import styles from './BalanceSection.module.css';

interface BalanceSectionProps {
  balance: number;
  onTopUp: () => void;
}

const BalanceSection: React.FC<BalanceSectionProps> = ({ balance, onTopUp }) => {
  return (
    <div className={styles.container}>
      <div className={styles.balanceInfo}>
        <span className={styles.label}>Баланс</span>
        <div className={styles.balanceAmount}>
          <img src="/coin small.png" alt="coin" className={styles.coinIcon} />
          <span className={styles.amount}>{balance.toLocaleString()}</span>
        </div>
      </div>
      <button className={styles.topUpButton} onClick={onTopUp}>
        Пополнить
      </button>
    </div>
  );
};

export default BalanceSection;
