import './WhatWeDo.css';

const CATEGORIES = [
  {
    index: '01',
    title: 'Branding',
    subtitle: 'The look',
    expanded: true,
    tags: ['Brand Strategy', 'Visual Identity', 'Logo Design', 'Brand Systems'],
  },
  { index: '02', title: 'Digital', subtitle: 'The set', expanded: false, tags: [] },
  { index: '03', title: 'Visual', subtitle: 'The light', expanded: false, tags: [] },
];

export default function WhatWeDo() {
  return (
    <section className="what-we-do section" aria-label="What we do">
      <div className="container what-we-do__grid">
        <div className="what-we-do__intro">
          <p className="eyebrow">WHAT WE DO</p>
          <h2 className="what-we-do__title">
            We make ideas<br />look damnn good.
          </h2>
          <img
            className="what-we-do__mascot"
            src="/assets/mascot-chair 1.png"
            alt="DAMNNN studio mascot sitting in a chair"
          />
        </div>

        <ul className="what-we-do__list">
          {CATEGORIES.map((cat) => (
            <li
              key={cat.index}
              className={`what-we-do__card${cat.expanded ? ' what-we-do__card--expanded' : ''}`}
            >
              <div className="what-we-do__card-header">
                <div>
                  <h3 className="what-we-do__card-title">{cat.title}</h3>
                  <p className="what-we-do__card-subtitle">{cat.subtitle}</p>
                </div>
                <span className="what-we-do__card-index">{cat.index}</span>
              </div>

              {cat.expanded && cat.tags.length > 0 && (
                <ul className="what-we-do__tags">
                  {cat.tags.map((tag) => (
                    <li key={tag} className="what-we-do__tag">{tag}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
