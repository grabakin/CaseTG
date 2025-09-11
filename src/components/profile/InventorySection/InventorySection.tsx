import React from 'react';
import styles from './InventorySection.module.css';

const InventorySection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.separator}></div>
      <h3 className={styles.title}>ИНВЕНТАРЬ</h3>
      <div className={styles.separator}></div>
    </div>
  );
};

export default InventorySection;
