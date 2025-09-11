import styles from "./CaseCard.module.css";

interface CaseCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
}

const CaseCard = ({name, price, image}: CaseCardProps) => {
    return (
        <div className={styles.caseCard}>
            <img src={`/${image}`} alt={name} className={styles.caseImage}/>
            <div className={styles.caseInfo}>
                <h3 className={styles.caseName}>{name}</h3>
                <div className={styles.casePrice}>
                    {price}
                    <img src="/coin%20small.png" alt="Монета" className={styles.coinIcon}/>
                </div>
            </div>
        </div>
    );
};
export default CaseCard;
