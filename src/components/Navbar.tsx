
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{ padding: scrolled ? "10px 0" : "20px 0" }}>
      <div className="container nav-content">
        <div className="logo-container">
          {/* Положите ваш логотип в папку public как logo.png */}
          <img src="/logo.png" alt="Old Kraken Logo" className="logo-img" />
          <h2 style={{ color: "var(--text-main)", margin: 0 }}>
            OLD <span style={{ color: "var(--cyan)" }}>KRAKEN</span>
          </h2>
        </div>
        <div className="nav-links">
          <a href="#about">О клубе</a>
          <a href="#hardware">Железо</a>
          <a href="#pricing">Тарифы</a>
          <motion.a
            href="#booking"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "0.9rem" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Забронировать
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
