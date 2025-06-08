"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "@/graphql/queries";
// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);

  if (loading) return <p>Загрузка...</p>;
  if (error) {
    console.error(error);
    return <p>Ошибка загрузки данных</p>;
  }

  const countries = data.countries;
  const currentCountry = countries[currentFlagIndex];

  const nextFlag = () => {
    const newIndex = Math.floor(Math.random() * countries.length);
    setCurrentFlagIndex(newIndex);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Угадай чей флаг?</h1>

        {/* Показываем эмодзи как флаг */}
        <div className={styles.flagWrapper}>
          <span style={{ fontSize: "3rem" }}>{currentCountry.emoji}</span>
        </div>

        {/* Кнопка следующего флага */}
        <button className={styles.nextButton} onClick={nextFlag}>
          Следующий флаг ➡️
        </button>
      </main>
    </div>
  );
}
