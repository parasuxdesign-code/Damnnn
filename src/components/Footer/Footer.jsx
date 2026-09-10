import './Footer.css';

const SOCIALS = [
  { label: 'Instagram', icon: '/assets/Instagram icon.svg', href: '#' },
  { label: 'LinkedIn', icon: '/assets/LinkedIn icon (footer).png', href: '#' },
  { label: 'Email us', icon: '/assets/Globe:email icon.svg', href: 'mailto:hello@damnnn.studio' },
];

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
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a href={social.href} className="site-footer__social-link">
                <img src={social.icon} alt="" width={28} height={28} />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
