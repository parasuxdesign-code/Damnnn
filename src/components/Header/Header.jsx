import Icon from '../Icon/Icon.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a href="/" className="site-header__logo">DAMNNN.</a>
        <button className="site-header__menu-toggle" aria-label="Toggle menu">
          <Icon name="menu" size={20} />
        </button>
      </div>
    </header>
  );
}
