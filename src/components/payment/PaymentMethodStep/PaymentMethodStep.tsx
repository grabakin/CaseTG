import React from 'react';
import type {PaymentMethod} from '../TopUpModal/TopUpModal';
import styles from './PaymentMethodStep.module.css';

interface PaymentMethodStepProps {
    selectedMethod: PaymentMethod;
    onMethodSelect: (method: PaymentMethod) => void;
}

const PaymentMethodStep: React.FC<PaymentMethodStepProps> = ({
                                                                 selectedMethod,
                                                                 onMethodSelect,
                                                             }) => {
    const paymentMethods = [
        {
            id: 'sbp' as PaymentMethod,
            name: 'СБП',
            logo: '/sbp_logo.png',
            available: true,
        },
        {
            id: 'tron' as PaymentMethod,
            name: 'TRON',
            logo: '/tron_logo.png',
            available: true,
        },
        {
            id: null,
            name: '',
            logo: '',
            available: false,
        },
        {
            id: null,
            name: '',
            logo: '',
            available: false,
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.stepNumber}>ШАГ 1</span>
                <h3 className={styles.title}>Выберите метод оплаты</h3>
            </div>

            <div className={styles.methodsGrid}>
                {paymentMethods.map((method, index) => (
                    <button
                        key={index}
                        className={`${styles.methodButton} ${
                            selectedMethod === method.id ? styles.selected : ''
                        } ${!method.available ? styles.disabled : ''}`}
                        onClick={() => method.available && onMethodSelect(method.id)}
                        disabled={!method.available}
                    >
                        {method.available && (
                            <img src={method.logo} alt={method.name} className={styles.logo}/>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PaymentMethodStep;
