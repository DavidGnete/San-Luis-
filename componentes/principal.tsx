import { useState } from "react";
import styles from "../styles/styles.module.css";


export default function SliderPrincipal() {
  const images = [
    "/images/rio2.jpg",
    "/images/rio1.jpg",
    "/images/rio3.jpg",
    "/images/rio4.jpg",
  ];

  const [index, setIndex] = useState(0);
  const total = images.length;

  const showSlide = (i) => {
    // Asegura que el slider sea infinito
    setIndex((i + total) % total);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Flechas */}
      <button
        className={`${styles.flecha} ${styles.izquierda}`}
        onClick={() => showSlide(index - 1)}
      >
        ❮
      </button>

      <div className={styles.slides}>
        {images.map((src, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
          >
            <img src={src} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      <button
        className={`${styles.flecha} ${styles.derecha}`}
        onClick={() => showSlide(index + 1)}
      >
        ❯
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => showSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
