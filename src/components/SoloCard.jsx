import { SiMinutemailer, SiLinkedin } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import "../css/card.css";

function SoloCard({ soloCard }) {
  const {
    name,
    brand,
    description,
    highlights,
    email,
    linkedin,
    alternativeLink,
    profilePic,
  } = soloCard.fields;
  // console.log(card)

  return (
    // section must be structured strategically for styling
    <Container>
      <Card className="product-card">
        <Card.Img className="first-row-image" src={profilePic} alt="client" />
        <div className="first-row-text">
          <h2 className="product-card-header">{name}</h2>
          <p>{brand}</p>
        </div>
        <div className="second-row">
          <h3 className="product-card-subheader">About Me</h3>
          <p>{description}</p>
        </div>
        <div className="third-row">
          <h3 className="product-card-subheader">Skills</h3>
          <p>{highlights}</p>
        </div>
        <div className="connect-column">
          <h3 className="connect-text">CONNECT</h3>
          <div className="icon-row">
            <a
              href={`mailto:${email}?subject=Hello%20World`}
              target="_blank"
              rel="noreferrer"
            >
              <SiMinutemailer className="card-icon" size={40} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <SiLinkedin className="card-icon" size={40} />
            </a>
            <a
              className="card-icon-container"
              href={alternativeLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaLink className="card-icon" size={40} />
            </a>
          </div>
        </div>
      </Card>
      <div className="product-btn">
        <Link to={`/products/${soloCard.id}`}>
          <Button className="card-button" variant="secondary">
            View
          </Button>
        </Link>
        <Link to={`/edit/${soloCard.id}`}>
          <Button className="card-button" variant="secondary">
            Edit
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default SoloCard;
