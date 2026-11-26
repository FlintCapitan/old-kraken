import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OLD KRAKEN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Легендарный компьютерный клуб на набережной. Морская мощь, топовое
          железо и атмосфера порта.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#pricing" className="btn-primary">
            Выбрать тариф
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
