import { motion } from "framer-motion";
import { Cpu, Monitor, Keyboard } from "lucide-react";

const Hardware = () => {
  const specs = [
    {
      icon: <Monitor size={32} />,
      title: "Мониторы",
      desc: "240Hz / 360Hz IPS панели для максимальной плавности картинки.",
    },
    {
      icon: <Cpu size={32} />,
      title: "Процессоры",
      desc: "Intel Core i7 / i9 последнего поколения. Никаких просадок FPS.",
    },
    {
      icon: <Keyboard size={32} />,
      title: "Периферия",
      desc: "Мыши и клавиатуры топовых брендов (Logitech, Razer, HyperX).",
    },
  ];

  return (
    <section id="hardware" style={{ backgroundColor: "var(--bg-card)" }}>
      <div className="container">
        <h2 className="section-title">
          Мощное <span>железо</span>
        </h2>
        <div className="grid-3">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="card"
              style={{
                backgroundColor: "var(--bg-dark)",
                borderLeft: "4px solid var(--cyan)",
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="icon-box">{spec.icon}</div>
              <h3>{spec.title}</h3>
              <p>{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hardware;
