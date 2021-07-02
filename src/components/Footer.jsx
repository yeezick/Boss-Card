import { Row, Col, Container, Spinner } from "react-bootstrap";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import "../css/footer.css";

function Footer() {
  return (
    <Container className="footer-container">
      <hr className="footer-hr"/>
      <Row>
        <Col>
          <Row>
            <h6 className="footer-header">About Me</h6>
          </Row>
          <Row>
            <p className="footer-text">
              I'm a student at Generesal Assembly's Software Engineering
              program. By the time I have to edit this text, I'll be a
              MERN-Stack developer!
            </p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h6 className="footer-header">Reach out to me:</h6>
          </Row>
          <Row className="footer-icon-row">
            <a className="footer-icon" href="https://github.com/yeezick">
              <VscGithubInverted size={40}/>
            </a>
            <a
              className="footer-icon"
              href="https://www.linkedin.com/in/erick-manrique/"
            >
              <AiFillLinkedin size={40}/>
            </a>
            <a className="footer-icon" href="https://twitter.com/erckmun">
              <FiTwitter size={40}/>
            </a>
            <a
              className="footer-icon"
              href="mailto:ramerick5@gmail.com?subject=Nice%20Webpage"
            >
              <GoMail size={40} />
            </a>
          </Row>
        </Col>
        <Col>
          <Row>
            <h6 className="footer-header">Thanks to</h6>
          </Row>
          <Row>
            <Container>
              <a className="footer-link" href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/">
                Angela Yu
              </a>
              <a className="footer-link" href="https://generalassemb.ly/">General Assembly</a>
              <a className="footer-link" href="https://trost.dev/">Conrad Trost</a>
              <a className="footer-link" href="https://www.google.com/sky/">Google (Google Sky)</a>
              <a className="footer-link" href="https://react-bootstrap.netlify.app/">Bootstrap</a>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
