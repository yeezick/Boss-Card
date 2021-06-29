import {Link} from "react-router-dom"
import Card from "./Card";


function ProductList({ cardList }) {
  return (
    <section>
      {cardList.map((card) => (
        <div>
          <Card key={card.id} card={card} />
          <Link key={card.createdTime} to={`/products/${card.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
