import { motion } from "framer-motion";

const Pricing = () => {
  const rates = [
    {
      time: "Стандарт",
      price: "150 ₽ / час",
      desc: "Обычное место, отличное железо.",
    },
    {
      time: "Комфорт",
      price: "200 ₽ / час",
      desc: "Кресла с большей амплитудой, монитор 240Hz.",
    },
    {
      time: "VIP",
      price: "300 ₽ / час",
      desc: "Отдельная комната, монитор 360Hz, изолированный звук.",
    },
  ];

  return (
    <section id="pricing" className="container">
      <h2 className="section-title">
        Наши <span>тарифы</span>
      </h2>

      <div className="grid-3" style={{ marginBottom: "40px" }}>
        {rates.map((rate, index) => (
          <motion.div
            key={index}
            className="card"
            style={{ textAlign: "center" }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 style={{ color: "var(--text-main)" }}>{rate.time}</h3>
            <div
              style={{
                fontSize: "2.5rem",
                color: "var(--brass)",
                margin: "20px 0",
                fontFamily: "Oswald",
              }}
            >
              {rate.price}
            </div>
            <p>{rate.desc}</p>
          </motion.div>
        ))}
      </div>

      <div id="booking" style={{ textAlign: "center", marginTop: "60px" }}>
        <h3 style={{ marginBottom: "20px" }}>Готовы погрузиться в игру?</h3>
        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            alert(
              "Здесь будет модуль бронирования (например, интеграция с Telegram или виджет).",
            )
          }
        >
          Забронировать место
        </motion.button>
      </div>
    </section>
  );
};

export default Pricing;
