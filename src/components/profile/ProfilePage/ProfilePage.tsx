import React, { useState } from 'react';
import UserSection from '../UserSection/UserSection';
import BalanceSection from '../BalanceSection/BalanceSection';
import TradeUrlSection from '../TradeUrlSection/TradeUrlSection';
import ActionButtons from '../ActionButtons/ActionButtons';
import InventorySection from '../InventorySection/InventorySection';
import InventoryGrid from '../InventoryGrid/InventoryGrid';
import TopUpModal from '../../payment/TopUpModal/TopUpModal';
import styles from './ProfilePage.module.css';

const ProfilePage: React.FC = () => {
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);

  const userData = {
    avatar: '/user-avatar.png',
    username: 'inoutputu',
    balance: 2608,
    tradeUrl: 'https://steamcommunity.com/tradeoffer/new/?partner=123456789&token=AbCdEfGh',
  };

  const inventoryItems = [
    {
      id: 1,
      name: 'ST™ Desert Eagle | Trigger Discipline',
      price: 876,
      image: '/inventory-item1.png',
      rarity: 'covert'
    },
    {
      id: 2,
      name: 'ST™ Desert Eagle | Trigger Discipline',
      price: 876,
      image: '/inventory-item1.png',
      rarity: 'covert'
    },
    {
      id: 3,
      name: 'ST™ Desert Eagle | Trigger Discipline',
      price: 876,
      image: '/inventory-item1.png',
      rarity: 'covert'
    },
    {
      id: 4,
      name: 'Karambit | Autotronic',
      price: 2340,
      image: '/inventory-item2.png',
      rarity: 'legendary'
    },
  ];

  const handleBalanceTopUp = () => {
    setIsTopUpModalOpen(true);
  };

  const handleCloseTopUpModal = () => {
    setIsTopUpModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <UserSection 
        avatar={userData.avatar}
        username={userData.username}
      />

      <BalanceSection 
        balance={userData.balance}
        onTopUp={handleBalanceTopUp}
      />

      <TradeUrlSection 
        tradeUrl={userData.tradeUrl}
      />

      <ActionButtons />

      <InventorySection />

      <InventoryGrid items={inventoryItems} />

      <TopUpModal 
        isOpen={isTopUpModalOpen}
        onClose={handleCloseTopUpModal}
      />
    </div>
  );
};

export default ProfilePage;
