import Card from "../components/card";
import styles from "../styles/hospedaje.module.css";
import Encabezado from "@/components/encabezado";

export default function Hoteles() {
  return (
    <main>
     <Encabezado />
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
        image="/images/rio1.webp"
        link="/casona"
        services={["🛏️ 8 habitaciones", "🍴 Restaurante", "🌿 Naturaleza"]}
      />

      <Card
        title="EcoHotel El Paraíso"
        description="Hospedaje ecológico en medio de la selva húmeda tropical."
        image="/images/lacasona3.jpg"
        link="/casona"
        services={["🛏️ 6 habitaciones", "🚶 Rutas ecológicas", "🍴 Restaurante"]}
      />
    </div>
    </main>
  );
}
