import './CTA.css';

export default function CTA() {
  return (
    <section id="contact" className="cta section" aria-label="Contact us">
      <div className="container cta__grid">
        <div className="cta__content">
          <p className="eyebrow">IDEAS EVERY WHERE</p>
          <h2 className="cta__title">
            Let's make it<br />
            <span className="cta__title-accent">damnnn good.</span>
          </h2>
          <p className="cta__copy">
            Got a rough idea? A big problem? or just what if...?
            <br />
            Bring it over. We'll turn the messy thinking into something worth shipping.
          </p>
          <a href="mailto:hello@damnnn.studio" className="btn btn--accent cta__button">
            Start A Project &nbsp;-&gt;
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
