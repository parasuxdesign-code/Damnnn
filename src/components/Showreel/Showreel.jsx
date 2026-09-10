import ShowreelVideo from './ShowreelVideo.jsx';
import './Showreel.css';

export default function Showreel() {
  return (
    <section className="showreel section" aria-label="Showreel">
      <span className="showreel__bg-text" aria-hidden="true">SHOWREEL</span>
      <div className="container">
        <ShowreelVideo />
      </div>
    </section>
  );
}
