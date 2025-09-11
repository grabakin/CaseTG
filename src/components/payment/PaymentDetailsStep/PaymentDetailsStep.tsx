import React, {useMemo} from 'react';
import styles from './PaymentDetailsStep.module.css';

interface PaymentDetailsStepProps {
    isEnabled: boolean;
    promoCode: string;
    amount: string;
    onPromoCodeChange: (value: string) => void;
    onAmountChange: (value: string) => void;
    onTopUp: () => void;
}

const PaymentDetailsStep: React.FC<PaymentDetailsStepProps> = ({
                                                                   isEnabled,
                                                                   promoCode,
                                                                   amount,
                                                                   onPromoCodeChange,
                                                                   onAmountChange,
                                                                   onTopUp,
                                                               }) => {
    // Логика расчета бонуса на основе промокода
    const bonusData = useMemo(() => {
        const promoCodes: { [key: string]: number } = {
            'GWTP3': 15,
            'BONUS10': 10,
            'EXTRA20': 20,
        };

        const baseAmount = parseFloat(amount) || 0;
        const bonusPercentage = promoCodes[promoCode.toUpperCase()] || 0;
        const bonusAmount = (baseAmount * bonusPercentage) / 100;
        const totalAmount = baseAmount + bonusAmount;

        return {
            bonusPercentage,
            bonusAmount,
            totalAmount,
            hasBonus: bonusPercentage > 0,
        };
    }, [promoCode, amount]);

    const canTopUp = isEnabled && amount && parseFloat(amount) > 0;

    return (
        <div className={`${styles.container} ${!isEnabled ? styles.disabled : ''}`}>
            <div className={styles.header}>
                <span className={styles.stepNumber}>ШАГ 2</span>
            </div>

            <div className={styles.inputGroup}>
                <label className={`${styles.label} ${bonusData.hasBonus ? styles.valid : ''}`}>Промокод</label>
                <input
                    type="text"
                    className={`${styles.input} ${bonusData.hasBonus ? styles.valid : ''}`}
                    value={promoCode}
                    onChange={(e) => onPromoCodeChange(e.target.value.toUpperCase())}
                    placeholder="Введите промокод"
                    disabled={!isEnabled}
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>Сумма пополнения</label>
                <input
                    className={styles.input}
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    placeholder="0"
                    disabled={!isEnabled}
                    min="0"
                    step="1"
                />
            </div>

            {amount && (
                <div className={styles.bonusInfo}>
                    <div className={styles.bonusText}>
                        К зачислению {bonusData.hasBonus &&
                        <span className={styles.bonusPercentage}>+{bonusData.bonusPercentage}%</span>}
                    </div>
                    <div className={styles.totalAmount}>
                        {bonusData.hasBonus ? Math.round(bonusData.totalAmount) : amount}
                        <img src="/coin small.png" alt="Coin" className={styles.coinIcon}/>
                    </div>
                </div>
            )}

            <button
                className={`${styles.topUpButton} ${canTopUp ? styles.active : ''}`}
                onClick={onTopUp}
                disabled={!canTopUp}
            >
                ПОПОЛНИТЬ
            </button>
        </div>
    );
};

export default PaymentDetailsStep;
