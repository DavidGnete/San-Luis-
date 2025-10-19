import { useState } from "react";
import styles from "../styles/Component/reserva.module.css";

export default function FormReserva() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState("");
  const [plan, setPlan] = useState("basico");

  const handleSubmit = (e) => {
    e.preventDefault();

    const telefono = "573108006524"; // 📞 tu número de WhatsApp con el código del país (57 = Colombia)
    const mensaje = `Hola, soy ${nombre}. Quiero reservar para la excursión:
- Fecha: ${fecha}
- Personas: ${personas}
- Plan elegido: ${plan}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formReserva}>
      <h3>Reserva tu cupo para Hotel la Casona</h3>

      <input
        type="text"
        placeholder="Tu nombre"
        required
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="date"
        required
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <input
        type="number"
        placeholder="Número de personas"
        required
        value={personas}
        onChange={(e) => setPersonas(e.target.value)}
      />

      <select value={plan} onChange={(e) => setPlan(e.target.value)}>
        <option value="basico">Plan Básico</option>
        <option value="completo">Plan Completo</option>
        <option value="vip">Plan VIP</option>
      </select>

      <button type="submit">Reservar por WhatsApp</button>
    </form>
  );
}
