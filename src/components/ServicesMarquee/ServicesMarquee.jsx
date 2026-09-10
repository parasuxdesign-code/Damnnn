import InlineSvg from '../Icon/InlineSvg.jsx';
import asteriskSmallSvg from '../../assets/icons/asterisk-small.svg?raw';
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
            <InlineSvg raw={asteriskSmallSvg} size={41} className="services-marquee__dot" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
