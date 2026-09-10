import Icon from '../Icon/Icon.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <div className="site-header__brand">
          <a href="/" className="site-header__logo">DAMNNN.</a>
          <button className="site-header__menu-toggle" aria-label="Toggle menu">
            <Icon name="menu" size={24} />
          </button>
        </div>

        <div className="site-header__actions">
          <button className="site-header__action-btn" aria-label="Toggle sound">
            <Icon name="graphic_eq" size={22} />
          </button>
          <button className="site-header__action-btn" aria-label="Play showreel">
            <Icon name="play_circle" size={30} />
          </button>
        </div>
      </div>
    </header>
  );
}
