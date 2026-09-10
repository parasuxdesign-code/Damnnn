import './CTA.css';

export default function CTA() {
  return (
    <section id="contact" className="cta section" aria-label="Contact us">
      <span className="cta__bg-text" aria-hidden="true">DAMNNN</span>
      <div className="container cta__grid">
        <div className="cta__content">
          <p className="eyebrow">Ideas everywhere</p>
          <h2 className="cta__title">
            Let's make it<br />
            <span className="cta__title-accent">damnnn good.</span>
          </h2>
          <p className="cta__copy">
            Got a rough idea? A big problem? Or just what if...? Bring it over.
            We'll turn this messy thinking into something worth shipping.
          </p>
          <a href="mailto:hello@damnnn.studio" className="btn btn--primary cta__button">
            Start a project
          </a>
        </div>
        <img
          className="cta__image"
          src="/images/mascot-desk.png"
          alt="DAMNNN studio mascot working at a desk"
        />
      </div>
    </section>
  );
}
