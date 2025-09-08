import CaseCard from "../CaseCard/CaseCard.tsx";
import styles from "./CaseCollection.module.css";

interface CaseItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CaseCollectionProps {
  title: string;
  cases: CaseItem[];
}

const CaseCollection = ({ title, cases }: CaseCollectionProps) => {
  return (
    <div className={styles.caseCollection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.casesGrid}>
        {cases.map((caseItem) => (
          <CaseCard
            key={caseItem.id}
            id={caseItem.id}
            name={caseItem.name}
            price={caseItem.price}
            image={caseItem.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseCollection;
