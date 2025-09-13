import React, {useState} from "react";
import Modal from "../../ui/Modal/Modal";
import PaymentMethodStep from "../PaymentMethodStep/PaymentMethodStep";
import PaymentDetailsStep from "../PaymentDetailsStep/PaymentDetailsStep";
import styles from "./TopUpModal.module.css";

interface TopUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export type PaymentMethod = "sbp" | "tron" | "webmoney" | "bitcoin" | null;

const TopUpModal: React.FC<TopUpModalProps> = ({isOpen, onClose}) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] =
        useState<PaymentMethod>(null);
    const [promoCode, setPromoCode] = useState("");
    const [amount, setAmount] = useState("");

    const handleClose = () => {
        setSelectedPaymentMethod(null);
        setPromoCode("");
        setAmount("");
        onClose();
    };

    const handlePaymentMethodSelect = (method: PaymentMethod) => {
        setSelectedPaymentMethod(method);
    };

    const handleTopUp = () => {
        // Логика пополнения баланса
        console.log("Top up:", {selectedPaymentMethod, promoCode, amount});
        handleClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className={styles.container}>
                <PaymentMethodStep
                    selectedMethod={selectedPaymentMethod}
                    onMethodSelect={handlePaymentMethodSelect}
                />

                <PaymentDetailsStep
                    isEnabled={selectedPaymentMethod !== null}
                    promoCode={promoCode}
                    amount={amount}
                    onPromoCodeChange={setPromoCode}
                    onAmountChange={setAmount}
                    onTopUp={handleTopUp}
                />
            </div>
        </Modal>
    );
};

export default TopUpModal;
