import InlineSvg from '../Icon/InlineSvg.jsx';
import menuSvg from '../../assets/icons/menu.svg?raw';
import equalizerSvg from '../../assets/icons/equalizer.svg?raw';
import vinylSvg from '../../assets/icons/vinyl.svg?raw';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <div className="site-header__brand">
          <a href="/" className="site-header__logo">
            <img src="/assets/DAMNNN..svg" alt="DAMNNN." width={82} height={21} />
          </a>
          <button className="site-header__menu-toggle" aria-label="Toggle menu">
            <InlineSvg raw={menuSvg} size={24} className="icon-menu" />
          </button>
        </div>

        <div className="site-header__actions">
          <button className="site-header__action-btn" aria-label="Toggle sound">
            <InlineSvg raw={equalizerSvg} size={24} className="icon-equalizer" />
          </button>
          <button className="site-header__action-btn" aria-label="Play showreel">
            <InlineSvg raw={vinylSvg} size={32} className="icon-vinyl" />
          </button>
        </div>
      </div>
    </header>
  );
}
