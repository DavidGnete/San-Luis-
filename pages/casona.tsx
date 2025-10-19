import Head from "next/head";
import Link from "next/link";
import FormReserva from "@/componentes/reserva";
import styles from "../styles/habitacion.module.css";
import Encabezado from "@/componentes/encabezado";

export default function SanLuis() {
  return (
    <>
      <Head>
        <title>Hotel La Casona - San Luis Antioquia</title>
        <meta
          name="description"
          content="Hotel La Casona en San Luis Antioquia: naturaleza, tranquilidad y confort. Reserva tu estadía cerca de las cascadas y ríos más hermosos."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>

      <Encabezado />
      {/* 🔹 CONTENIDO */}
      <main className={styles.contenido}>
        {/* 🏞️ GALERÍA */}
        <section className={styles.imagenes}>
          <div className={styles.galleria}>
            <img
              className={styles.item1}
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/8b/d6/28/paraiso-escondido-cabanas.jpg?w=1400&h=-1&s=1"
              alt="Cabaña 1"
            />
            <img
              className={styles.item2}
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/56/26/9c/paraiso-escondido-cabanas.jpg?w=1400&h=-1&s=1"
              alt="Cabaña 2"
            />
            <img
              className={styles.item3}
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/56/24/26/paraiso-escondido-cabanas.jpg?w=1000&h=-1&s=1"
              alt="Cabaña 3"
            />
            <img
              className={styles.item4}
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/8b/d6/28/paraiso-escondido-cabanas.jpg?w=1400&h=-1&s=1"
              alt="Cabaña 4"
            />
          </div>
        </section>

        <hr />

        {/* 🏠 DESCRIPCIÓN */}
        <section className={styles.inicio}>
          <h1 className={styles.center}>Hotel La Casona</h1>
          <p>
            Ubicado en medio de la naturaleza, el Hotel La Casona ofrece un
            ambiente tranquilo con cómodas cabañas, gastronomía típica y
            cercanía a los principales atractivos turísticos de San Luis.
          </p>
        </section>
        <>
        <h2 className={styles.center}>Servicios</h2>
        </>

        {/* 💼 SERVICIOS */}
        <div className={styles.servicios}>
            
              <i className="fa-solid fa-wifi"></i> Wi-Fi gratuito
            
              <i className="fa-solid fa-utensils"></i> Restaurante con comida
              típica

              <i className="fa-solid fa-car"></i> Parqueadero privado

              <i className="fa-solid fa-person-hiking"></i> Tours guiados por la
              naturaleza

              <i className="fa-solid fa-bus"></i> Cerca al transporte
            
        </div>

        {/* 📅 FORMULARIO Y MAPA */}
        <section className={styles.footer}>
          {/* 🟩 FORMULARIO */}
          <div className={styles.reserva}>
            <FormReserva />
          </div>
         
          {/* 🟩 MAPA */}
          <div className={styles.ubicacion}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.629047671352!2d-74.99517942570469!3d6.045525893940181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46ad6aeb2b9a1d%3A0x4c5db003bd2cac0c!2sHotel%20La%20Casona!5e0!3m2!1ses-419!2sco!4v1758661763312!5m2!1ses-419!2sco"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
