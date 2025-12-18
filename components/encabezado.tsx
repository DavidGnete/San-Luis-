"use client";
import Link from "next/link";
import styles from "../styles/Component/encabezado.module.css";
import { useState } from "react";

export default function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className={styles.encabezado}>

      {/* Botón hamburguesa */}
      <div className={styles.hamburguesa} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú con clase condicional */}
      <nav className={`${styles.enlaces} ${menuAbierto ? styles.mostrar : ""}`}>
        <Link href="/">Inicio</Link>
      {/*   <Link href="/hospedajes">Hoteles</Link>
        <Link href="/aventura">Cosas por hacer</Link> */}
      </nav>
      <h3 className={styles.sanluis}>San Luis</h3>
    </header>
  );
}
