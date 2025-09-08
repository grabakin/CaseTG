import CaseCollection from "../CaseCollection/CaseCollection.tsx";
import styles from "./CasePage.module.css";

const cases = [
    {id: "dummy", name: "МАНЕКЕН", price: 49, image: "DummyCase.png"},
    {id: "pirates", name: "ПИРАТЫ", price: 49, image: "PiratesCase.png"},
    {id: "bee", name: "ПЧЕЛА", price: 49, image: "BeeCase.png"},
    {id: "circus", name: "ЦИРК", price: 49, image: "CircusCase.png"},
];

const CasesPage = () => {
    return (
        <div className={styles.casesPage}>
            <CaseCollection title="Кейсы дня" cases={cases}/>
        </div>
    );
};

export default CasesPage;
