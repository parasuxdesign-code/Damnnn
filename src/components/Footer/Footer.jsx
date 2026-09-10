import InlineSvg from '../Icon/InlineSvg.jsx';
import instagramSvg from '../../assets/icons/instagram.svg?raw';
import globeEmailSvg from '../../assets/icons/globe-email.svg?raw';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <div className="site-footer__brand-block">
          <img
            className="site-footer__logo"
            src="/assets/ DAMNNN wordmark (footer).svg"
            alt="DAMNNN. Creative Studio"
            width={172}
            height={71}
          />
          <p className="site-footer__copyright">
            © 2026 DAMNNN. Made with questionable amounts of coffee.
          </p>
        </div>

        <ul className="site-footer__socials">
          <li>
            <a href="#" className="site-footer__social-link">
              <InlineSvg raw={instagramSvg} size={28} className="icon-instagram" />
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="site-footer__social-link">
              <img src="/assets/LinkedIn icon (footer).png" alt="" width={28} height={28} />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:hello@damnnn.studio" className="site-footer__social-link">
              <InlineSvg raw={globeEmailSvg} size={28} className="icon-globe-email" />
              Email us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
