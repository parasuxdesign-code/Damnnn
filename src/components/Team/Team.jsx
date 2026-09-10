import './Team.css';

const MEMBERS = [
  { id: 'adarsh', name: 'Adarsh', role: 'Chief Damnnn Officer', bio: 'Runs strategy and delivery. Keeps the work sharp on brief and on time.', photo: '/assets/Crew photos.png' },
  { id: 'paras', name: 'Paras', role: 'Chief Damnnn Officer', bio: 'Runs strategy and delivery. Keeps the work sharp on brief and on time.', photo: '/assets/Crew photos1.png' },
];

export default function Team() {
  return (
    <section className="team section" aria-label="Team">
      <span className="team__bg-text" aria-hidden="true">Damnnnn.</span>
      <div className="container">
        <p className="eyebrow">THE CREW</p>
        <h2 className="team__title">Partners in crime</h2>
        <p className="team__intro">
          No giant team. No complicated process. Just the two of us figuring stuff out and making things we're proud of.
        </p>

        <ul className="team__list">
          {MEMBERS.map((member) => (
            <li key={member.id} className="team__card">
              <img className="team__photo" src={member.photo} alt={member.name} />
              <div className="team__card-body">
                <h3 className="team__name">{member.name}</h3>
                <p className="team__role">{member.role}</p>
                <p className="team__bio">{member.bio}</p>
                <a
                  className="team__linkedin"
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <img src="/assets/LinkedIn icon (crew card).png" alt="" width={28} height={28} />
                  Linkedin &rarr;
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
