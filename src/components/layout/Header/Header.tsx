import { useState } from 'react';
import TopUpModal from '../../payment/TopUpModal/TopUpModal';
import styles from "./Header.module.css";

const Header = () => {
  const balance = 12462;
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);
  
  const handleAddBalance = () => {
    setIsTopUpModalOpen(true);
  };
  const handleCloseTopUpModal = () => {
    setIsTopUpModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.promocodeInfo}>
          <div className={styles.bonusTag}>
            10%
            <br />
            НА СЧЁТ
          </div>
          <div className={styles.promocode}>H435G</div>
        </div>
        <button className={styles.balanceInfo} onClick={handleAddBalance}>
          <img src="/plus.png" alt="Плюс" className={styles.addIcon} />
          <span className={styles.balanceAmount}>{balance}</span>
          <img src="/coin.png" alt="Монета" className={styles.coinIcon} />
        </button>
      </header>
      
      <TopUpModal 
        isOpen={isTopUpModalOpen} 
        onClose={handleCloseTopUpModal} 
      />
    </>
  );
};
export default Header;
