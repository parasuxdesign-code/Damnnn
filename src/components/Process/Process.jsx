import './Process.css';

const STEPS = [
  { index: '01', title: 'Discover', description: 'We learn your business, your users, and the problem worth solving before we touch a single pixel.' },
  { index: '02', title: 'Define', description: 'We turn findings into a clear brief: scope, priorities, and success criteria everyone agrees on.' },
  { index: '03', title: 'Design', description: 'We shape the product — structure, flow, and visual language — and validate it before build.' },
  { index: '04', title: 'Deliver', description: 'We build, test, and ship, then hand off a product your team can run with.' },
];

export default function Process() {
  return (
    <section className="process section" aria-label="How we work">
      <div className="container">
        <p className="eyebrow">How we work</p>
        <h2 className="process__title">
          Good work doesn't<br />just happen.
        </h2>
        <p className="process__intro">
          We keep the process clear, collaborative and focused on making the right thing — not just making something.
        </p>

        <ol className="process__steps">
          {STEPS.map((step, i) => (
            <li
              key={step.index}
              className={`process__step${i >= 2 ? ' process__step--accent' : ''}`}
            >
              <span className="process__step-index">{step.index}</span>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
