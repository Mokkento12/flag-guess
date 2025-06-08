import Image from "next/image";
import styles from "./FlagCard.module.sass";

interface FlagCardProps {
  country: {
    code: string;
    name: string;
  };
}

const FlagCard = ({ country }: FlagCardProps) => {
  return (
    <div className={styles.flagWrapper}>
      <Image
        src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
        alt={country.name}
        width={256}
        height={170}
        unoptimized
      />
    </div>
  );
};

export default FlagCard;
