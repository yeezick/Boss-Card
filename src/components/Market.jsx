import { useEffect } from "react";
import { BsPersonLinesFill } from "react-icons/bs";
import { GiMagickTrick, GiPodiumWinner } from "react-icons/gi";
import { Container, Col, Row, Button } from "react-bootstrap/";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/market.css";

function Market() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <Container>
      <h2 className="market-header">How We Work</h2>
      <Container
        className="market-tab"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Row className="market-card-container">
          <Col xs={3} className="market-title">
            <div className="market-icon">
              <BsPersonLinesFill size={50} />
            </div>
            <p className="market-title-text">Tell us about yourself</p>
          </Col>
          <Col className="market-text">
            Your success starts with you. The concept of networking doesn't
            change this rule, so we encourage you be proud and confident of who
            you are by asking you about.. you!
          </Col>
        </Row>
      </Container>
      <Container
        className="market-tab"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Row className="market-card-container">
          <Col className="market-text">
            The information is then sent to a private database to live with all
            the other networkers that decided to upgrade their networking
            swagger.
          </Col>
          <Col xs={3} className="market-title">
            <div className="market-icon">
              <GiMagickTrick size={50} />
            </div>
            <p className="market-title-text">We work our magic</p>
          </Col>
        </Row>
      </Container>
      <Container
        className="market-tab"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {" "}
        <Row className="market-card-container">
          <Col xs={3} className="market-title">
            <div className="market-icon">
              <GiPodiumWinner size={50} />
            </div>
            <p className="market--title-text">You Network</p>
          </Col>
          <Col className="market-text">
            Whether you're looking for a job or a connection, you're ready to do
            it subtly, confidently.
          </Col>
        </Row>
      </Container>
      <div
        style={{ display: "flex" }}
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <button className="market-button">Make your own</button>
      </div>
    </Container>
  );
}
export default Market;
