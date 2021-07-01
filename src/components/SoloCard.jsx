import { SiMinutemailer, SiLinkedin } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import {Button, ButtonGroup, Card, Container} from "react-bootstrap";

function SoloCard({ soloCard }) {
  const {
    name,
    brand,
    description,
    highlights,
    email,
    linkedin,
    alternativeLink,
    profilePic
  } = soloCard.fields;
  // console.log(card)

  return (
    // section must be structured strategically for styling
    <Container>
      <Card className="product-card">
        <Card.Img className="first-row-image" src={profilePic} alt="client" />
        <div className="first-row-text">
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
        <div className="connect-column">
          <h3 className="connect-text">CONNECT</h3>
          <div className="icon-row">
            <a href={email} target="_blank" rel="noreferrer">
              <SiMinutemailer size={40} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <SiLinkedin size={40} />
            </a>
            <a href={alternativeLink} target="_blank" rel="noreferrer">
              <FaLink size={40} />
            </a>
          </div>
        </div>
      </Card>
      <ButtonGroup aria-label="view and edit buttons">
      <div className="product-btn">
        <Link to={`/products/${soloCard.id}`}>
          <Button variant="secondary">View</Button>
        </Link>
        <Link to={`/edit/${soloCard.id}`}>
          <Button variant="secondary">Edits</Button>
        </Link>
      </div>
      </ButtonGroup>
    </Container>
  );
}

export default SoloCard;
