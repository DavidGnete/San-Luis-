import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/aventura.module.css";

export default function Aventura() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/script/aventura.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Aventura</title>
        <meta name="description" content="Explora aventuras y experiencias en San Luis" />
      </Head>

      <header>
        <div className={styles.encabezado}>
          <nav>
            <ul className={styles.enlaces}>
              <li>
                <Link href="/">Casa</Link>
                <Link href="/hospedajes">Hoteles</Link>
                <Link href="/aventura">Aventuras</Link>
              </li>
            </ul>
          </nav>
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          <div className={styles.vacio}></div>
        </div>
      </header>

      <main className={styles.contenido}>
        <div className={styles.card}>
          <div className={styles.cardSlider}>
            <Image src="/images/rio1.jpg" alt="Hotel 1" width={600} height={400} className={styles.active} />
            <Image src="/images/rio3.jpg" alt="Hotel interior" width={600} height={400} />
            <Image src="/images/rio4.jpg" alt="Hotel vista" width={600} height={400} />
            <button className={styles.prev}>&#10094;</button>
            <button className={styles.next}>&#10095;</button>
          </div>

          <div className={styles.cardInfo}>
            <h3>Hotel La Casona</h3>
            <p>Un hospedaje tranquilo rodeado de naturaleza, ideal para familias y parejas.</p>
            <ul className={styles.services}>
              <li>🛏️ 10 habitaciones</li>
              <li>🍴 Restaurante</li>
              <li>🏊 Piscina</li>
            </ul>
            <Link href="/casona" className={styles.btn}>Ver más</Link>
          </div>
        </div>

        <hr />

        {[2, 3, 4].map((i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardSlider}>
              <Image src="/images/rio1.jpg" alt="Hotel 1" width={600} height={400} className={styles.active} />
              <Image src="/images/rio3.jpg" alt="Hotel interior" width={600} height={400} />
              <Image src="/images/rio4.jpg" alt="Hotel vista" width={600} height={400} />
              <button className={styles.prev}>&#10094;</button>
              <button className={styles.next}>&#10095;</button>
            </div>

            <div className={styles.cardInfo}>
              <h3>Hotel La Casona</h3>
              <p>Un hospedaje tranquilo rodeado de naturaleza, ideal para familias y parejas.</p>
              <ul className={styles.services}>
                <li>🛏️ 10 habitaciones</li>
                <li>🍴 Restaurante</li>
                <li>🏊 Piscina</li>
              </ul>
              <Link href="/casona" className={styles.btn}>Ver más</Link>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
