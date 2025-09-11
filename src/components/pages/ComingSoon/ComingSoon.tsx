import styles from "./ComingSoon.module.css";
interface ComingSoonProps {
  pageName: string;
}

const ComingSoon = ({ pageName }: ComingSoonProps) => {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.container}>
        <div className={styles.icon}>🚧</div>
        <h2 className={styles.title}>{pageName}</h2>
        <p className={styles.subtitle}>В разработке</p>
        <p className={styles.description}>
          Эта страница находится в процессе разработки.
          <br />
          Скоро здесь появится много интересного!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
