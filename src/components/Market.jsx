import { BsPersonLinesFill } from "react-icons/bs";
import { GiMagickTrick, GiPodiumWinner } from "react-icons/gi";
import { Accordion, Container, Card, Button } from "react-bootstrap/";
// import Container from "react-bootstrap/Container";

function Market() {
  return (
      <Container>
        <h2 className="market-header">How We Work</h2>
        <Accordion defaultActiveKey="0">
          <Card className="market-card-container">
            <Card.Header>
              <Accordion.Toggle
                className="market-tab"
                as={Button}
                variant="light"
                eventKey="0"
              >
                <BsPersonLinesFill size={50} />
                <p className="market-text">Tell us about yourself</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Your success starts with you. The concept of networking doesn't
                change this rule, so we encourage you be proud and confident of
                who you are by asking you about.. you!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="market-card-container">
            <Card.Header>
              <Accordion.Toggle
                className="market-tab"
                as={Button}
                variant="light"
                eventKey="1"
              >
                <GiMagickTrick size={50} />
                <p className="market-text">We work our magic</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                The information is then sent to a private database to live with
                all the other bosses that decided to upgrade their networking
                swagger.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="market-card-container">
            <Card.Header>
              <Accordion.Toggle
                className="market-tab"
                as={Button}
                variant="light"
                eventKey="2"
              >
                <GiPodiumWinner size={50} />
                <p className="market-text">
                  You leave with a virtual impression they won't forget!
                </p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Then we use that information to create your card! And don't
                worry, we're not interested in selling your information!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
 
  );
}
export default Market;
