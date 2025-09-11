import React, { useState } from 'react';
import styles from './TradeUrlSection.module.css';

interface TradeUrlSectionProps {
  tradeUrl: string;
}

const TradeUrlSection: React.FC<TradeUrlSectionProps> = ({ tradeUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tradeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>Trade URL</span>
      </div>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          value={tradeUrl}
          readOnly
          className={styles.input}
        />
        <button 
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
          onClick={handleCopy}
        >
          {copied ? '✓' : '📋'}
        </button>
      </div>
    </div>
  );
};

export default TradeUrlSection;
