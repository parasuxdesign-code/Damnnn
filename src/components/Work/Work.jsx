import Icon from '../Icon/Icon.jsx';
import './Work.css';

const PROJECTS = [
  { id: 'after-11-perfume-1', title: 'After 11 Perfume', summary: 'Full brand identity and packaging for a specialty roaster from naming to shelf.', image: '/images/work-after-11.jpg' },
  { id: 'zenzy-pay', title: 'Zenzy Pay', summary: 'Full brand identity and packaging for a specialty roaster from naming to shelf.', image: '/images/work-zenzy-pay.jpg' },
  { id: 'after-11-perfume-2', title: 'After 11 Perfume', summary: 'Full brand identity and packaging for a specialty roaster from naming to shelf.', image: '/images/work-after-11.jpg' },
];

export default function Work() {
  return (
    <section className="work section" aria-label="Selected work">
      <div className="container">
        <div className="work__header">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2 className="work__title">Work We're DAMNN Proud OF</h2>
          </div>
          <div className="work__controls">
            <span className="work__counter">1/6</span>
            <button type="button" className="work__nav-btn" aria-label="Previous project">
              <Icon name="arrow_back" size={20} />
            </button>
            <button type="button" className="work__nav-btn" aria-label="Next project">
              <Icon name="arrow_forward" size={20} />
            </button>
          </div>
        </div>

        <ul className="work__track">
          {PROJECTS.map((project) => (
            <li key={project.id} className="work__card">
              <img className="work__image" src={project.image} alt={project.title} />
              <div className="work__card-footer">
                <h3 className="work__card-title">{project.title}</h3>
                <p className="work__card-summary">{project.summary}</p>
              </div>
              <span className="work__card-link" aria-hidden="true">
                <Icon name="north_east" size={18} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
