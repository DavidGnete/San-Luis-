import { useState, useEffect } from "react";
import styles from "../styles/styles.module.css";

export default function SliderPrincipal() {
  const images = [
    "/images/rio2.jpg",
    "/images/rio1.jpg",
    "/images/pueblo.jpg",
    "/images/charcoslide.jpg",
    "/images/cubaslider.jpg",
    "/images/plantaslide.jpg",
    "/images/municipio.jpg",

    
  ];

  const [index, setIndex] = useState(0);
  const total = images.length;

  const showSlide = (i: number) => {
    setIndex((i + total) % total);
  };

  // ⏱ Auto cambio cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 4000); // cambia cada 4s (puedes ajustar)

    return () => clearInterval(intervalo);
  }, [total]);

  return (
    <div className={styles.sliderContainer}>
      {/* Flecha izquierda */}
      <button
        className={`${styles.flecha} ${styles.izquierda}`}
        onClick={() => showSlide(index - 1)}
      >
        ❮
      </button>

      {/* Slides */}
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

      {/* Flecha derecha */}
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
