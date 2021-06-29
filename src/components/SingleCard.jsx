import {useParams} from "react-router-dom"
import {Link} from "react-router-dom";
// import {baseURL, config} from "../services"

function SingleCard(props) {
  const params = useParams();
  console.log(props)
  
  const cardToFind = props.cardList.find((card) => card.id === params.id)
  const {name, brand, description, highlights, email, linkedin, alternativeLink} = cardToFind.fields;
  console.log(cardToFind)
  // const name = cardToFind.fields.name

  return (
    <section className="card">
      <h2>why am i broken</h2>
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
      <div>
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
      <Link to={`/edit/${params.id}`}>
        <button>Edit</button>
      </Link>
    </section>
  );
}
export default SingleCard;
