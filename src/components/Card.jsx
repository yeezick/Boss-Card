function Card({ card }) {
  const {
    name,
    brand,
    description,
    highlights,
    email,
    linkedin,
    alternativeLink,
  } = card.fields;

  return (
    // section must be structured strategically for styling
    <section className="card">
      <div className="first-row">
        <h2>{name}</h2>
        <p>{brand}</p>
      </div>
      <div className="second-row">
        <h3>About Me</h3>
        <p>{description}</p>
      </div>
      <div className="third-row">
        <h3>Skills</h3>
        <p>{highlights}</p>
      </div>
      <div className="fourth-row">
        <h2>Get In Touch!</h2>
        <a href={email} target="_blank" rel="noreferrer">
          <img src="" alt="email" />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img src="" alt="LinkedIn" />
        </a>
        <a href={alternativeLink} target="_blank" rel="noreferrer">
          <img src="" alt="Alternative link" />
        </a>
      </div>
    </section>
  );
}

export default Card;
