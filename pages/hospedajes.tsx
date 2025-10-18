import Card from "../componentes/card";
import styles from "../styles/hospedaje.module.css";

export default function Hoteles() {
  return (
    <main>
      <div className={styles.encabezado}>
    <nav>
      <ul>
        <li className={styles.enlaces}>
          <a href="/">Inicio</a>
          <a href="/hospedajes">Hoteles</a>
          <a href="/aventura">Cosas por hacer</a>
        </li>
      </ul>
    </nav>
    <h3 className={styles.sanluis}>San Luis</h3>
  </div>
      <div className={styles.grid}>
      <Card
        title="Hotel La Casona"
        description="Un hospedaje tranquilo rodeado de naturaleza, ideal para familias y parejas."
        image="/images/lacasona1.jpg"
        link="/casona"
        services={["🛏️ 10 habitaciones", "🍴 Restaurante", "🏊 Piscina"]}
      />

      <Card
        title="Hotel Río Claro"
        description="Hospedaje con vista a los ríos de San Luis, perfecto para aventureros."
        image="/images/rio1.jpg"
        link="/rioclaro"
        services={["🛏️ 8 habitaciones", "🍴 Restaurante", "🌿 Naturaleza"]}
      />

      <Card
        title="EcoHotel El Paraíso"
        description="Hospedaje ecológico en medio de la selva húmeda tropical."
        image="/images/lacasona3.jpg"
        link="/paraiso"
        services={["🛏️ 6 habitaciones", "🚶 Rutas ecológicas", "🍴 Restaurante"]}
      />
    </div>
    </main>
  );
}
