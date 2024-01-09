// components/Home.js 
import React from 'react';
import '../styles/style.css'; // Importa il file di stile 
import '../styles/slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const images = [
    { src: `${process.env.PUBLIC_URL}/slides/slide1.jpg`, alt: 'Slide 1' },
    { src: `${process.env.PUBLIC_URL}/slides/slide2.jpg`, alt: 'Slide 2' },
    // Aggiungi ulteriori immagini secondo necessità
  ];

  const sliderItems = images.map((image, index) => (
    <div key={index}>
      <img src={image.src} alt={image.alt} style={{ height: '100%', width: 'auto' }} />
    </div>
  ));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <>
     <div className="home-container">
     <section className="slider-section">
        <Slider className="custom-slider" {...sliderSettings} style={{ height: '600px' }}>
          {sliderItems}
        </Slider>
      </section>

      <section className="content-section">
        <h1>La Mia Educazione Smart</h1>
        <p>La Tua Porta d'Accesso alla Conoscenza</p>
      </section>

      <section className="content-section">
        <h2>Benvenuto su La Mia Educazione Smart</h2>
        <p>Sblocca il potere dell'apprendimento con i nostri corsi online interattivi. Esplora un mondo di conoscenza a portata di clic.</p>
        <a href="/corsi" className="cta-button">
          Esplora Corsi
        </a>
      </section>

      <section className="content-section" id="corsi">
        <h2>Corsi in Primo Piano</h2>
        <div className="feature">
          <img src={process.env.PUBLIC_URL + "/images/corso1.jpg"} alt="Corso 1" />
          <div>
            <h3>Introduzione alla Programmazione</h3>
            <p>Apprendi i fondamenti della programmazione e avvia il tuo percorso di codifica.</p>
          </div>
        </div>

        <div className="content-section" className="feature">
          <img src={process.env.PUBLIC_URL + "/images/corso2.jpg"} alt="Corso 2" />
          <div>
            <h3>Essenziali della Scienza dei Dati</h3>
            <p>Esplora il mondo della scienza dei dati e sfrutta il potere dei dati.</p>
          </div>
        </div>
      </section>

      <section className="content-section" className="testimonial">
        <h2>Cosa Dicono i Nostri Studenti</h2>
        <p>"La Mia Educazione Smart ha trasformato il modo in cui apprendo. I corsi sono coinvolgenti e gli insegnanti sono esperti nei loro campi." - Mario Rossi</p>
      </section>
      </div>
    </>
  );
};

export default Home;
