import { motion } from "framer-motion";
import { Anchor, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        О клубе <span>KRAKEN</span>
      </motion.h2>

      <div className="grid-3">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="icon-box">
            <Anchor size={40} />
          </div>
          <h3>Морская атмосфера</h3>
          <p>
            Мы расположились в бывшем здании порта. Индустриальный стиль, виды
            на набережную и уникальный вайб старого судна.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="icon-box">
            <MapPin size={40} />
          </div>
          <h3>Локация</h3>
          <p>
            Самый центр набережной. Удобно добираться, есть где припарковаться,
            а после игры можно выйти подышать морским воздухом.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="icon-box">
            <Anchor size={40} />
          </div>
          <h3>Наш план</h3>
          <p>
            Просторный зал с зонированием: зона для киберспорта, VIP-комнаты с
            изолированной акустикой и лаунж-зона с напитками.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
