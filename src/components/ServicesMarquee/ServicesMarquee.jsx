import InlineSvg from '../Icon/InlineSvg.jsx';
import asteriskSmallSvg from '../../assets/icons/asterisk-small.svg?raw';
import './ServicesMarquee.css';

/**
 * Exact service vocabulary from the Figma source (Hero frame, node
 * 2329:103 "Frame 433" — the ticker row at the bottom of the Hero
 * section). Verified against a full-document metadata pull: this is
 * the complete list of seven items actually present. "Packaging
 * Design", "Video" and "Short Videos" do not exist anywhere in the
 * file and are not included — see the implementation report.
 */
const SERVICES = [
  'Social Media',
  'Branding',
  'Packaging',
  'Web Design',
  'Motion',
  'Design System',
  'UI/UX',
];

function ServiceList({ ariaHidden }) {
  return (
    <ul className="services-marquee__list" aria-hidden={ariaHidden || undefined}>
      {SERVICES.map((service) => (
        <li key={service} className="services-marquee__item">
          <span>{service}</span>
          <InlineSvg raw={asteriskSmallSvg} size={41} className="services-marquee__dot" />
        </li>
      ))}
    </ul>
  );
}

export default function ServicesMarquee() {
  return (
    <nav className="services-marquee" aria-label="Services">
      {/*
        The track is rendered twice back-to-back and animated from
        translateX(0) to translateX(-50%) — since both halves are
        identical, the loop point is invisible. The second copy is
        aria-hidden so screen readers only announce the list once.
      */}
      <div className="services-marquee__track motion-marquee-track">
        <ServiceList />
        <ServiceList ariaHidden />
      </div>
    </nav>
  );
}
