import Link from "next/link";
import styles from "../styles/card.module.css";

// 🧩 Definimos los tipos que el componente recibe
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  services: string[];
}

export default function Card({ title, description, image, link, services }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul>
          {services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>

        <Link href={link} className={styles.button}>
          Ver más
        </Link>
      </div>
    </div>
  );
}

