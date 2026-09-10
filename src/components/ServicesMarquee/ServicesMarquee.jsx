import './ServicesMarquee.css';

const SERVICES = [
  'Social Media',
  'Branding',
  'Packaging',
  'Web Design',
  'Motion',
  'Design System',
  'UI/UX',
];

export default function ServicesMarquee() {
  return (
    <nav className="services-marquee" aria-label="Services">
      <ul className="services-marquee__list">
        {SERVICES.map((service) => (
          <li key={service} className="services-marquee__item">
            <span>{service}</span>
            <span className="services-marquee__dot" aria-hidden="true">✳</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
