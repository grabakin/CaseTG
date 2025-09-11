import React from 'react';
import styles from './InventoryItem.module.css';

export interface InventoryItemData {
  id: number;
  name: string;
  price: number;
  image: string;
  rarity: string;
}

interface InventoryItemProps {
  item: InventoryItemData;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ item }) => {
  return (
    <div className={`${styles.container} ${styles[item.rarity]}`}>
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.name} className={styles.itemImage} />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.priceContainer}>
          <img src="/coin small.png" alt="coin" className={styles.coinIcon} />
          <span className={styles.price}>{item.price.toLocaleString()}</span>
        </div>
        <p className={styles.itemName}>{item.name}</p>
      </div>
    </div>
  );
};

export default InventoryItem;
