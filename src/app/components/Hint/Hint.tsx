import styles from "./Hint.module.sass";

interface HintProps {
  show: boolean;
  countryName: string;
}

const Hint = ({ show, countryName }: HintProps) => {
  if (!show) return null;

  return (
    <>
      <div className={styles.hint}>
        <p>
          Это флаг: <strong>{countryName}</strong>
        </p>
      </div>
    </>
  );
};

export default Hint;
