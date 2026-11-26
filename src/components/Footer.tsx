const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 0",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        textAlign: "center",
        backgroundColor: "var(--bg-card)",
      }}
    >
      <div className="container">
        <h2 style={{ color: "var(--brass)", marginBottom: "10px" }}>
          OLD KRAKEN
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
          Brest Esport Club
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} Все права защищены. Набережная, д. 1.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
