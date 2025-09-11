import { useEffect, useState, useRef } from "react";
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

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const CaseCollection = ({ title, cases }: CaseCollectionProps) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Генерируем случайные блестки вокруг заголовка
    const generateSparkles = () => {
      if (!titleRef.current) return;

      // Получаем реальные размеры заголовка
      const titleRect = titleRef.current.getBoundingClientRect();
      const titleWidth = titleRect.width;
      const titleHeight = titleRect.height;

      const newSparkles: Sparkle[] = [];
      const sparkleCount = 20;

      for (let i = 0; i < sparkleCount; i++) {
        // Новый подход с взвешенным распределением: больше блесток у границ
        const maxRadius = 25; // Максимальное расстояние от границ заголовка
        const minDistance = 0; // Минимальное расстояние от границ заголовка

        let x, y;
        let attempts = 0;
        const maxAttempts = 100;
        let accepted = false;

        do {
          // Генерируем случайную точку в большом квадрате вокруг заголовка
          const areaWidth = titleWidth + maxRadius * 2;
          const areaHeight = titleHeight + maxRadius * 2;

          x = Math.random() * areaWidth - areaWidth / 2;
          y = Math.random() * areaHeight - areaHeight / 2;

          attempts++;

          // Проверяем, что точка НЕ внутри заголовка
          const isInsideTitle =
            x > -(titleWidth / 2) - minDistance &&
            x < titleWidth / 2 + minDistance &&
            y > -(titleHeight / 2) - minDistance &&
            y < titleHeight / 2 + minDistance;

          if (!isInsideTitle) {
            // ИСПРАВЛЕННЫЙ расчет расстояния до ближайшей границы заголовка
            let distanceToTitle;

            // Определяем в какой зоне находится точка и считаем расстояние до ближайшей границы
            if (x >= -titleWidth / 2 && x <= titleWidth / 2) {
              // Точка по горизонтали в пределах заголовка - считаем вертикальное расстояние
              if (y < -titleHeight / 2) {
                distanceToTitle = Math.abs(y + titleHeight / 2); // расстояние до верхней границы
              } else {
                distanceToTitle = Math.abs(y - titleHeight / 2); // расстояние до нижней границы
              }
            } else if (y >= -titleHeight / 2 && y <= titleHeight / 2) {
              // Точка по вертикали в пределах заголовка - считаем горизонтальное расстояние
              if (x < -titleWidth / 2) {
                distanceToTitle = Math.abs(x + titleWidth / 2); // расстояние до левой границы
              } else {
                distanceToTitle = Math.abs(x - titleWidth / 2); // расстояние до правой границы
              }
            } else {
              // Точка в углах - считаем расстояние до ближайшего угла заголовка
              const corners = [
                Math.sqrt(
                  Math.pow(x + titleWidth / 2, 2) +
                    Math.pow(y + titleHeight / 2, 2)
                ), // левый верхний
                Math.sqrt(
                  Math.pow(x - titleWidth / 2, 2) +
                    Math.pow(y + titleHeight / 2, 2)
                ), // правый верхний
                Math.sqrt(
                  Math.pow(x + titleWidth / 2, 2) +
                    Math.pow(y - titleHeight / 2, 2)
                ), // левый нижний
                Math.sqrt(
                  Math.pow(x - titleWidth / 2, 2) +
                    Math.pow(y - titleHeight / 2, 2)
                ), // правый нижний
              ];
              distanceToTitle = Math.min(...corners);
            }

            // Вероятность принятия точки обратно пропорциональна расстоянию
            // Близкие точки имеют высокую вероятность (~0.9), дальние низкую (~0.1)
            const acceptanceProbability = Math.max(
              0.0001,
              1 - (distanceToTitle / maxRadius) * 0.999
            );

            if (Math.random() < acceptanceProbability) {
              accepted = true;
            }
          }
        } while (attempts < maxAttempts && !accepted);

        // Если не удалось найти подходящую точку, пропускаем
        if (!accepted) continue;

        newSparkles.push({
          id: i,
          x,
          y,
          size: Math.random() * 1.5 + 1, // 1-3px
          opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7
        });
      }

      setSparkles(newSparkles);
    };

    // Небольшая задержка чтобы элемент успел отрендериться
    const timer = setTimeout(generateSparkles, 10);
    return () => clearTimeout(timer);
  }, [title]); // Пересоздаем блестки для каждого заголовка

  return (
    <div className={styles.caseCollection}>
      <div className={styles.titleContainer}>
        <h2 ref={titleRef} className={styles.title}>
          {title}
        </h2>
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className={styles.sparkle}
            style={{
              left: `calc(50% + ${sparkle.x}px)`,
              top: `calc(50% + ${sparkle.y}px)`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              opacity: sparkle.opacity,
            }}
          />
        ))}
      </div>
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
