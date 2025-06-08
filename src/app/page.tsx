"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "@/graphql/queries";
import Image from "next/image";
import styles from "./page.module.css";

export default function FlagGuesser() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  const currentCountry = data.countries[currentFlagIndex];

  const nextFlag = () => {
    const newIndex = Math.floor(Math.random() * data.countries.length);
    setCurrentFlagIndex(newIndex);
  };

  return (
    <main className={styles.gameContainer}>
      <h1>Угадай чей флаг?</h1>

      {/* Флаг через flagcdn.com */}
      <div className={styles.flagWrapper}>
        <Image
          src={`https://flagcdn.com/w160/${currentCountry.code.toLowerCase()}.png`}
          alt={currentCountry.name}
          width={256}
          height={170}
          unoptimized
        />
      </div>

      {/* Кнопка следующего флага */}
      <button className={styles.nextButton} onClick={nextFlag}>
        Следующий флаг ➡️
      </button>
    </main>
  );
}
