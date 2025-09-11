import React from 'react';
import InventoryItem, { type InventoryItemData } from '../InventoryItem/InventoryItem';
import styles from './InventoryGrid.module.css';

interface InventoryGridProps {
  items: InventoryItemData[];
}

const InventoryGrid: React.FC<InventoryGridProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InventoryGrid;
