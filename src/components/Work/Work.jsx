import { useState } from 'react';
import './Work.css';

const PROJECTS = [
  { id: 'after-11-perfume', title: 'After 11 Perfume', summary: 'Full brand identity and packaging for a specialty roaster, from naming to shelf.', image: '/images/work-after-11.jpg' },
  { id: 'zenzy-pay', title: 'Zenzy Pay', summary: 'Full brand identity and packaging, from naming to shelf.', image: '/images/work-zenzy-pay.jpg' },
  { id: 'placeholder-3', title: 'Project Three', summary: 'Placeholder project summary copy goes here.', image: '/images/work-placeholder-3.jpg' },
  { id: 'placeholder-4', title: 'Project Four', summary: 'Placeholder project summary copy goes here.', image: '/images/work-placeholder-4.jpg' },
  { id: 'placeholder-5', title: 'Project Five', summary: 'Placeholder project summary copy goes here.', image: '/images/work-placeholder-5.jpg' },
  { id: 'placeholder-6', title: 'Project Six', summary: 'Placeholder project summary copy goes here.', image: '/images/work-placeholder-6.jpg' },
];

export default function Work() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % PROJECTS.length);
  const prev = () => setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <section className="work section" aria-label="Selected work">
      <div className="container">
        <div className="work__header">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="work__title">
              Work we're<br />damnn proud of
            </h2>
          </div>
          <div className="work__controls">
            <span className="work__counter">{index + 1}/{PROJECTS.length}</span>
            <button type="button" className="work__nav-btn" onClick={prev} aria-label="Previous project">←</button>
            <button type="button" className="work__nav-btn" onClick={next} aria-label="Next project">→</button>
          </div>
        </div>

        <ul className="work__track" style={{ '--work-index': index }}>
          {PROJECTS.map((project) => (
            <li key={project.id} className="work__card">
              <img className="work__image" src={project.image} alt={project.title} />
              <div className="work__card-footer">
                <h3 className="work__card-title">{project.title}</h3>
                <p className="work__card-summary">{project.summary}</p>
              </div>
              <span className="work__card-link" aria-hidden="true">↗</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
