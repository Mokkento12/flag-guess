import styles from "./FlagButtons.module.sass";

interface FlagButtonsProps {
  onHintClick: () => void;
  onNextClick: () => void;
  showHint: boolean;
}

const FlagButtons = ({
  onHintClick,
  onNextClick,
  showHint,
}: FlagButtonsProps) => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons}>
        <button className={styles.hintButton} onClick={onHintClick}>
          {showHint ? "Скрыть подсказку" : "Показать подсказку"}
        </button>

        <button className={styles.nextButton} onClick={onNextClick}>
          Следующий флаг
        </button>
      </div>
    </div>
  );
};

export default FlagButtons;
