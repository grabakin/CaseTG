import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Блокируем прокрутку фона
      document.body.style.overflow = 'hidden';
    } else {
      // Восстанавливаем прокрутку
      document.body.style.overflow = 'unset';
    }

    // Cleanup при размонтировании компонента
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
