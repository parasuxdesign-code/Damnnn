import './Process.css';

const STEPS = [
  { index: '01', title: 'Discover', description: 'Understand the problem, ambition and opportunity', variant: 'light' },
  { index: '02', title: 'Define', description: 'Understand the problem, ambition and opportunity', variant: 'light' },
  { index: '03', title: 'Design', description: 'Understand the problem, ambition and opportunity', variant: 'accent' },
  { index: '04', title: 'Deliver', description: 'Understand the problem, ambition and opportunity', variant: 'accent' },
];

export default function Process() {
  return (
    <section className="process section" aria-label="How we work">
      <div className="container">
        <p className="eyebrow">HOW WE WORK</p>
        <h2 className="process__title">
          Good work doesn't<br />just happen.
        </h2>
        <p className="process__intro">
          We keep the process clear, collaborative and focused on making the right thing — not just making something.
        </p>

        <ol className="process__steps">
          {STEPS.map((step) => (
            <li
              key={step.index}
              className={`process__step process__step--${step.variant}`}
            >
              <span className="process__step-index" aria-hidden="true">{step.index.replace('0', '')}</span>
              <span className="process__step-dot" />
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
