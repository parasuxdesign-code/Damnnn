import Icon from '../Icon/Icon.jsx';
import './Footer.css';

const SOCIALS = [
  { label: 'Instagram', icon: 'photo_camera', href: '#' },
  { label: 'LinkedIn', icon: 'link', href: '#' },
  { label: 'Email us', icon: 'mail', href: 'mailto:hello@damnnn.studio' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <div className="site-footer__brand-block">
          <p className="site-footer__logo">DAMNNN.</p>
          <p className="site-footer__tagline">Creative Studio</p>
          <p className="site-footer__copyright">
            © 2026 DAMNNN. Made with questionable amounts of coffee.
          </p>
        </div>

        <ul className="site-footer__socials">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a href={social.href} className="site-footer__social-link">
                <Icon name={social.icon} size={18} />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
