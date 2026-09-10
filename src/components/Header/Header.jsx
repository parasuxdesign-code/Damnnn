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
            <img src="/assets/Menu icon.svg" alt="" width={24} height={24} />
          </button>
        </div>

        <div className="site-header__actions">
          <button className="site-header__action-btn" aria-label="Toggle sound">
            <img src="/assets/Equalizer icon.svg" alt="" width={24} height={24} />
          </button>
          <button className="site-header__action-btn" aria-label="Play showreel">
            <img src="/assets/Vnyl.svg" alt="" width={32} height={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
