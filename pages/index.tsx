import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/styles.module.css";
import SliderPrincipal from "@/componentes/principal"; 
import Encabezado from "@/componentes/encabezado";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/script/script.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>San Luis Antioquia | Turismo, Cascadas, Charcos Hoteles y Hospedajes</title>
        <meta
          name="description"
          content="Descubre San Luis, Antioquia: hoteles, hospedajes y aventuras turísticas en el corazón de Antioquia. Encuentra cascadas, ríos y planes de naturaleza."
        />
        <meta
          property="og:title"
          content="San Luis Antioquia: Turismo, Aventuras y Hospedajes"
        />
        <meta
          property="og:description"
          content="Descubre cascadas, ríos y hospedajes en San Luis, la Perla Verde del Oriente Antioqueño."
        />
        <meta property="og:image" content="/images/cascada.jpg" />
        <meta property="og:url" content="https://visitasanluisantioquia.shop/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          as="image"
          href="/images/ricky-beron-9aQgNay52u0-unsplash.jpg"
        />
        <link rel="canonical" href="https://visitasanluisantioquia.shop/" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.fondo}>
        <header className={styles.fondo}>

  {/* 🔥 Aquí insertamos el componente del slider */}
  <Encabezado />
  <SliderPrincipal />
</header>

        
        
      </header>

      <main className={styles.fondoMain}>
        <section>
          <h1 className={styles.titulo}>San Luis Antioquia: Turismo, Cascadas, Charcos y Hospedajes</h1>
          <div className={styles.container}>
            <div className={styles.text}>
              <div className={styles.mitad}>
                <div className={styles.contenedores}>
                  <img
                    className={styles.fotos}
                    src="/images/iglesia.jpg"
                    alt="Iglesia"
                    loading="lazy"
                  />
                  
                  <div className={styles.inicio}>
                  <h2 className={styles.sanluis2}>San Luis</h2>
                    <p>
  <strong>San Luis, Antioquia</strong>, es un destino natural que cautiva a quienes buscan desconectarse del ruido y reencontrarse con la tranquilidad. 
  Ubicado en el <strong>Oriente antioqueño</strong>, a solo <strong>124 km de Medellín</strong>, este encantador municipio se levanta entre 
  montañas cubiertas de selva, ríos de aguas cristalinas y cascadas que parecen salidas de una postal. Con una altura de 
  <strong>1.050 metros sobre el nivel del mar</strong> y un clima cálido que ronda los 25°C, San Luis invita a sumergirse en la pureza 
  de sus charcos naturales y a disfrutar de una experiencia auténticamente paisa.
</p>

<p>
  Conocido como <strong>“La Perla Verde del Oriente”</strong>, San Luis combina aventura y descanso en un solo lugar. 
  Sus paisajes exuberantes son ideales para practicar <strong>senderismo, fotografía de naturaleza y baño en ríos</strong>, 
  mientras que su gente, amable y acogedora, conserva las tradiciones que hacen de este pueblo un tesoro escondido en Antioquia. 
  Cada rincón, desde los caminos rurales hasta las plazas coloridas, cuenta una historia que conecta al visitante con 
  la vida tranquila y la esencia natural del campo colombiano.
</p>

                  </div>
                </div>

                <div id={styles.contenedor}>
                  <div className={styles.inicio}>
                    <h2 className={styles.sanluis2}>Por qué Visitar <br /> San Luis Antioquia</h2>
  <p>
  Apodado <strong>“La Perla Verde del Oriente Antioqueño”</strong>, 
  <strong>San Luis</strong> es mucho más que un destino: es una experiencia de conexión con la naturaleza, 
  la cultura y la tranquilidad. Aquí, entre montañas cubiertas de selva y ríos que serpentean cristalinos, 
  el visitante descubre el verdadero encanto del <strong>turismo de naturaleza en Antioquia</strong>.
</p>

<p>
  Cada rincón de San Luis respira autenticidad. Su <strong>gente amable</strong> y hospitalaria, 
  los sabores de su gastronomía campesina, las caminatas por senderos ecológicos 
  y los charcos escondidos entre la vegetación hacen que el viaje se convierta en una historia que vale la pena vivir. 
  Es un lugar perfecto para quienes buscan <strong>aventura suave, descanso y ecoturismo sostenible</strong>.
</p>


                  </div>
                  <div className={styles.inicio}>
                    <video
                      className={styles.fotos}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="/videos/cascadaCuba.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              <div id={styles.textfotos}>
                <h2>Atractivos turísticos de San Luis Antioquia</h2>
                </div>

                <div className={styles.galleria}>
                  <img
                    className={styles.arbol}
                    src="/images/charco.jpg"
                    alt="Atardecer"
                    loading="lazy"
                  />
                  <img
                    className={styles.arbol}
                    src="/images/cascadacuba.jpg"
                    alt="Atardecer"
                    loading="lazy"
                  />
                  <img
                    className={styles.arbol}
                    src="/images/planta.jpg"
                    alt="Atardecer"
                    loading="lazy"
                  />
                  <img
                    className={styles.arbol}
                    src="/images/charcodos.jpg"
                    alt="Atardecer"
                    loading="lazy"
                  />
                  <img
                    className={styles.arbol}
                    src="/images/turismouno.jpg"
                    alt="Atardecer"
                    loading="lazy"
                  />
                  <img
                    className={styles.arbol}
                    src="/images/turismodos.jpg"
                    alt="Atardecer"
                    loading="lazy"
                  />
                  
                </div>

                <ul className={styles.sliderTask}>
                  <li>
                    <strong>Cascada La Cuba</strong>: una caída de agua memorable al inicio del municipio.
                  </li>
                  <li>
                    <strong>Charco y Cascada La Planta</strong>: hermosos para bañarse, relajarse y conectar con la
                    naturaleza.
                  </li>
                  <li>
                    <strong>El Balseadero</strong>: senderos ecológicos, piscinas naturales, miradores, zonas verdes
                    ideales para caminatas y disfrutar en familia.
                  </li>
                  <li>
                    <strong>Río Dormilón</strong>, <strong>Río Samaná Norte</strong> y quebradas La Tebaida, El
                    Balseadero, La Cristalina.
                  </li>
                  <li>
                    <strong>Cerro El Castellón</strong>: vistas panorámicas, biodiversidad y flora endémica.
                  </li>
                  <li>
                    <strong>Iglesia de San Luis Gonzaga</strong> y el parque central: historia y cultura local.
                  </li>
                </ul>

                <h2 className={styles.titulo}>Actividades Turísticas Recomendadas</h2>
                <ul className={styles.sliderTask}>
                  <li>Senderismo guiado por bosques húmedos y rutas ecológicas.</li>
                  <li>Baños en charcos y ríos: El Dormilón, La Planta, El Balseadero, La Cristalina.</li>
                  <li>Visitas culturales: iglesias, plaza central, gastronomía local.</li>
                  <li>Aventura suave: tours en caballo, fotografía de naturaleza y observación de aves.</li>
                  <li>Planes de relajación: descansar al sonido del río, disfrutar del paisaje montañoso.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.container2}>
          <h2 className={styles.titulo}>No Esperes Mas Reserva Tu Aventura</h2>
          <div className={styles.opciones}>
            <a className={styles.slide2} href="/hospedajes">
              <img src="/images/hospedaje.jpg" loading="lazy" alt="Hospedajes" />
              <button type="button" className={`btn btn-light ${styles.overlayButton}`}>Reserva</button>
              <h3>Hospedajes</h3>
            </a>
            <>
            <a className={styles.slide2} href="/aventura">
              <img src="/images/rafting.jpg" loading="lazy" alt="Aventuras" />
              <button type="button" className={`btn btn-light ${styles.overlayButton}`}>Reserva</button>
              <h3>Aventuras</h3>
            </a>
            </>
          </div>
        </section>

        <div className={styles.fintexto}>
          <h2>Clima, ubicación y cómo llegar</h2>
          <p>
            San Luis está a 1.050 msnm y tiene un clima promedio cálido de 24-27 °C. Desde Medellín se accede por la
            Autopista Medellín-Bogotá.
          </p>
          </div>
          <section className={styles.map}>
            <h2>Mapa San Luis</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7935.303134971997!2d-75.0002213615138!3d6.0424544757726775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46ad6bc4404165%3A0xecd0f01ef96f2464!2sSan%20Lu%C3%ADs%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1758482251660!5m2!1ses-419!2sco"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <div id={styles.Pfinal}>
            <img src="/images/anuncio.jpg" alt="San Luis" style={{ width: '100%', height: 'auto', borderRadius: '10px' , opacity: 0.8 }} />

          </div>
    </>
  );
}
