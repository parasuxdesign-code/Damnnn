import { useEffect, useId, useRef, useState } from 'react';
import InlineSvg from '../Icon/InlineSvg.jsx';
import menuSvg from '../../assets/icons/menu.svg?raw';
import equalizerSvg from '../../assets/icons/equalizer.svg?raw';
import vinylSvg from '../../assets/icons/vinyl.svg?raw';
import './Header.css';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!navOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setNavOpen(false);
    };
    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <div className="site-header__brand js-enter" style={{ '--enter-delay': '0ms' }}>
          <a href="/" className="site-header__logo">
            <img src="/assets/DAMNNN..svg" alt="DAMNNN." width={82} height={21} />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="site-header__menu-toggle"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
            aria-controls={panelId}
            onClick={() => setNavOpen((open) => !open)}
          >
            <InlineSvg raw={menuSvg} size={24} className="icon-menu" />
          </button>
        </div>

        <div className="site-header__actions js-enter" style={{ '--enter-delay': '80ms' }}>
          <button className="site-header__action-btn" aria-label="Toggle sound">
            <InlineSvg raw={equalizerSvg} size={24} className="icon-equalizer" />
          </button>
          <button className="site-header__action-btn" aria-label="Play showreel">
            <InlineSvg raw={vinylSvg} size={32} className="icon-vinyl" />
          </button>
        </div>
      </div>

      {/*
        No nav-panel node exists anywhere in the Figma file (verified via a
        full-document metadata pull, not just the Hero frame) — there is no
        glass treatment to source. This panel therefore reuses the site's
        existing dark-panel tokens rather than inventing blur/opacity/border
        values and calling them "Figma glass". Flagged in the implementation
        report; replace with real values once a nav-panel node is supplied.
      */}
      <div
        id={panelId}
        ref={panelRef}
        className={`site-header__panel${navOpen ? ' site-header__panel--open' : ''}`}
        role="dialog"
        aria-modal="false"
        aria-hidden={!navOpen}
      >
        <a
          href="#contact"
          className="site-header__panel-link"
          tabIndex={navOpen ? 0 : -1}
          onClick={() => setNavOpen(false)}
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
