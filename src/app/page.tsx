"use client";

import { useState } from "react";
import { mockCountries } from "@/data/mockCountries";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);

  const currentCountry = mockCountries[currentFlagIndex];

  const nextFlag = () => {
    const newIndex = Math.floor(Math.random() * mockCountries.length);
    setCurrentFlagIndex(newIndex);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Угадай чей флаг?</h1>
        {/* Блок с флагом */}
        <div className={styles.flagPlaceholder}>
          <Image
            width={256}
            height={170}
            unoptimized
            src={currentCountry.flagUrl}
            alt="Флаг"
          />
        </div>
        {/* Кнопка далее */}
        <button className={styles.nextButton} onClick={nextFlag}>
          Далее
        </button>
      </main>
    </div>
  );
}
