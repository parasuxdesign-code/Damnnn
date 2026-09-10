import Icon from '../Icon/Icon.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <div className="site-header__brand">
          <a href="/" className="site-header__logo">DAMNNN.</a>
          <button className="site-header__menu-toggle" aria-label="Toggle menu">
            <Icon name="menu" size={18} />
          </button>
        </div>

        <div className="site-header__actions">
          <button className="site-header__action-btn" aria-label="Toggle theme">
            <Icon name="dark_mode" size={18} />
          </button>
          <button className="site-header__action-btn" aria-label="Play showreel">
            <Icon name="play_arrow" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
