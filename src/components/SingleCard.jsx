import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { SiMinutemailer, SiLinkedin } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import {Button, Card, Container} from "react-bootstrap";
import "../css/card.css"
// import {baseURL, config} from "../services"

function SingleCard(props) {
  const params = useParams();
  console.log(props);

  const cardToFind = props.cardList.find((card) => card.id === params.id);
  if (!cardToFind) {
    return <Loading />;
  }
  const {
    name,
    brand,
    description,
    highlights,
    email,
    linkedin,
    alternativeLink,
    profilePic,
  } = cardToFind.fields;
  console.log(cardToFind);

  return (
    <Container style={{marginTop:"5rem"}}>
       <Card className="product-card">
        <Card.Img className="first-row-image" src={profilePic} alt="client" />
        <div className="first-row-text">
          <h2 className="product-card-header">{name}</h2>
          <p>{brand}</p>
        </div>
        <div className="second-row">
          <h3 className="product-card-subheader" >About Me</h3>
          <p>{description}</p>
        </div>
        <div className="third-row">
          <h3 className="product-card-subheader">Skills</h3>
          <p>{highlights}</p>
        </div>
        <div className="connect-column">
          <h3 className="connect-text">CONNECT</h3>
          <div className="icon-row">
            <a href={email} target="_blank" rel="noreferrer">
              <SiMinutemailer className="card-icon"size={40} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <SiLinkedin className="card-icon"size={40} />
            </a>
            <a className="card-icon-container" href={alternativeLink} target="_blank" rel="noreferrer">
              <FaLink className="card-icon" size={40} />
            </a>
          </div>
        </div>
      </Card>
      <div className="product-btn">
        <Link to={`/edit/${cardToFind.id}`}>
          <Button className="card-button" variant="secondary">Edit</Button>
        </Link>
      </div>
    </Container>
  );
}
export default SingleCard;
