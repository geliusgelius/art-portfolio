import "@/assets/scss/components/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Портфолио художника Зерниной Марины.
            Все права защищены. Developer: Angelina Smirnova
          </p>
        </div>
      </div>
    </footer>
  );
}
