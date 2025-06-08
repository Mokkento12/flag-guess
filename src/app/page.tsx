"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "@/graphql/queries";

import styles from "./page.module.css";
import FlagCard from "./components/FlagCard/FlagCard";
import Hint from "./components/Hint/Hint";
import FlagButtons from "./components/FlagButtons/FlagButtons";

export default function FlagGuesser() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  const currentCountry = data.countries[currentFlagIndex];

  const nextFlag = () => {
    const newIndex = Math.floor(Math.random() * data.countries.length);
    setCurrentFlagIndex(newIndex);
    setShowHint(false);
  };

  const toggleHint = () => {
    setShowHint((prev) => !prev);
  };

  return (
    <main className={styles.gameContainer}>
      <h1>Угадай чей флаг?</h1>

      <FlagCard country={currentCountry} />
      <Hint show={showHint} countryName={currentCountry.name} />

      <FlagButtons
        onHintClick={toggleHint}
        onNextClick={nextFlag}
        showHint={showHint}
      />
    </main>
  );
}
