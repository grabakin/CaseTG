import CaseCollection from "../CaseCollection/CaseCollection.tsx";
import styles from "./CasePage.module.css";

// Функция для получения правильного пути к изображению
const getImagePath = (imageName: string) => {
  const base = import.meta.env.BASE_URL;
  return base.endsWith("/") ? base + imageName : base + "/" + imageName;
};

const dailyCases = [
  {
    id: "dummy",
    name: "МАНЕКЕН",
    price: 49,
    image: getImagePath("DummyCase.png"),
  },
  {
    id: "pirates",
    name: "ПИРАТЫ",
    price: 49,
    image: getImagePath("PiratesCase.png"),
  },
  { id: "bee", name: "ПЧЕЛА", price: 49, image: getImagePath("BeeCase.png") },
  {
    id: "circus",
    name: "ЦИРК",
    price: 49,
    image: getImagePath("CircusCase.png"),
  },
];

const popularCases = [
  {
    id: "circus-2",
    name: "ЦИРК",
    price: 99,
    image: getImagePath("CircusCase.png"),
  },
  {
    id: "dummy-2",
    name: "МАНЕКЕН",
    price: 79,
    image: getImagePath("DummyCase.png"),
  },
  { id: "bee-2", name: "ПЧЕЛА", price: 89, image: getImagePath("BeeCase.png") },
];

const premiumCases = [
  {
    id: "pirates-2",
    name: "ПИРАТЫ",
    price: 149,
    image: getImagePath("PiratesCase.png"),
  },
  {
    id: "bee-3",
    name: "ПЧЕЛА",
    price: 199,
    image: getImagePath("BeeCase.png"),
  },
  {
    id: "dummy-3",
    name: "МАНЕКЕН",
    price: 129,
    image: getImagePath("DummyCase.png"),
  },
  {
    id: "circus-3",
    name: "ЦИРК",
    price: 179,
    image: getImagePath("CircusCase.png"),
  },
  {
    id: "bee-34",
    name: "ПЧЕЛА",
    price: 199,
    image: getImagePath("BeeCase.png"),
  },
];

const newCases = [
  {
    id: "dummy-4",
    name: "МАНЕКЕН",
    price: 69,
    image: getImagePath("DummyCase.png"),
  },
  {
    id: "pirates-3",
    name: "ПИРАТЫ",
    price: 59,
    image: getImagePath("PiratesCase.png"),
  },
];

const CasesPage = () => {
  return (
    <div className={styles.casesPage}>
      <CaseCollection title="Кейсы дня" cases={dailyCases} />
      <CaseCollection title="Популярные" cases={popularCases} />
      <CaseCollection title="Премиум" cases={premiumCases} />
      <CaseCollection title="Новинки" cases={newCases} />
    </div>
  );
};

export default CasesPage;
