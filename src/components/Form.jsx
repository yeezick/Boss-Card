import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { Container, Card, Col, Row, Jumbotron, Form } from "react-bootstrap";
import "../css/form.css";

function BootStrapForm(props) {
  const { setToggleRender, cardList } = props;
  console.log(props);
  // states
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [alternativeLink, setAlternativeLink] = useState("");
  const [jumboHeader, setJumboHeader] = useState("All About You");
  const [jumboText, setJumboText] = useState(
    "This is where the magic happens and it starts with You. The information you input here will be used to create your card! Please read the labels and placeholders carefully."
  );

  // react router dom methods
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    // if theres an id in the url and the data array is bigger than 0
    if (params.id && cardList.length > 0) {
      // find the card with the corresponding id in params
      const cardToFind = cardList.find((card) => card.id === params.id);
      // destructure fields of card to find
      const { fields } = cardToFind;
      // if the card exists, populate the states
      if (cardToFind) {
        setProfilePic(fields.profilePic);
        setName(fields.name);
        setBrand(fields.brand);
        setDescription(fields.description);
        setHighlights(fields.highlights);
        setEmail(fields.email);
        setLinkedin(fields.linkedin);
        setAlternativeLink(fields.alternativeLink);
        setJumboHeader("Nobody's perfect");
        setJumboText("Fix whatever you need to fix boss.");
      }
    }
  }, [params.id, props.cardList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCard = {
      profilePic,
      name,
      brand,
      description,
      highlights,
      email,
      alternativeLink,
    };
    // if url contains parameters, the form will render with pre-filled data and submit to api using PUT instead
    if (params.id) {
      const specificURL = `${baseURL}/${params.id}`;
      await axios.put(specificURL, { fields: newCard }, config);
    } else {
      // make an axios post request to the baseurl, attached with data to add & auth config
      await axios.post(baseURL, { fields: newCard }, config);
    }

    // triggers redirect after 1 second
    setToggleRender((curr) => !curr);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  return (
    <Container className="form-container">
      <Card className="form-card">
        <Jumbotron className="form-jumbotron">
          <h2 style={{ textDecoration: "underline", marginBottom: "1.3rem" }}>
            {jumboHeader}
          </h2>
          <p>{jumboText}</p>
        </Jumbotron>
        <Form>
          <Row>
            <Col>
              {/* profile */}
              <Form.Group controlId="profilePic">
                <Form.Label className="form-label">
                  Link to your profile picture:
                </Form.Label>
                <Form.Control
                required
                  type="url"
                  placeholder="URL"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              {/* name */}
              <Form.Group controlId="name">
                <Form.Label className="form-label">My name is:</Form.Label>
                <Form.Control
                required
                  type="text"
                  placeholder="First and Last Names"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* brand */}
          <Form.Group controlId="brand">
            <Form.Label className="form-label">
              What's the first impression you want to make on others?
            </Form.Label>
            <Form.Control
            required
              type="text"
              placeholder="1-2 sentences"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>

          {/* description */}
          <Form.Group controlId="description">
            <Form.Label className="form-label">
              A short paragraph going in-depth about you and who you are!
            </Form.Label>
            <Form.Control
            required
              type="text"
              placeholder="2+ sentences"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          {/* highlights */}
          <Form.Group controlId="highlights">
            <Form.Label className="form-label">
              What are some things you're proud of or consider highlights about
              you?
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Sentence / List"
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
            />
          </Form.Group>

          {/* email */}
          <Form.Group controlId="email">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
            required
              type="email"
              placeholder="rainingcats101@catmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* linkedin */}
          <Form.Group controlId="linkedin">
            <Form.Label className="form-label">LinkedIn:</Form.Label>
            <Form.Control
            required
              type="url"
              placeholder="URL"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </Form.Group>

          {/* altlink */}
          <Form.Group controlId="alternativeLink">
            <Form.Label className="form-label">
              An alternative link for anything like your portfolio, GitHub, or
              favorite site!
            </Form.Label>
            <Form.Control
              type="url"
              placeholder="URL"
              value={alternativeLink}
              onChange={(e) => setAlternativeLink(e.target.value)}
            />
          </Form.Group>
          <button className="form-button" onClick={handleSubmit}>
            Create Boss Card
          </button>
        </Form>
      </Card>
    </Container>
  );
}
export default BootStrapForm;
