import {Link} from "react-router-dom"
import Card from "./Card";


function ProductList({ cardList }) {
  return (
    <section>
      {cardList.map((card) => (
        <div key={card.id+0}>
          <Card key={card.id} card={card} />
          <div className="product-btn">
          <Link to={`/products/${card.id}`}>
            <button>View</button>
          </Link>
          <Link to={`/edit/${card.id}`}>
            <button>Edits</button>
          </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
