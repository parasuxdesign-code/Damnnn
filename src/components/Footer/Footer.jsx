import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <div>
          <p className="site-footer__logo">DAMNNN.</p>
          <p className="site-footer__tagline">Creative Studio</p>
        </div>

        <ul className="site-footer__socials">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="mailto:hello@damnnn.studio">Email us</a></li>
        </ul>
      </div>
      <div className="container">
        <p className="site-footer__copyright">
          © 2026 DAMNNN. Book quotation and quote about of the creative.
        </p>
      </div>
    </footer>
  );
}
