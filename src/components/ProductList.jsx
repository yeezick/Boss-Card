
import Card from "./Card";


function ProductList({ cardList }) {
  return (
    <section>
      <h2 className="product-list-header">Client-Made Products</h2>
      {cardList.map((card) => (
        <div key={card.id+0}>
          <Card key={card.id} card={card} />
        </div>
      ))}
    </section>
  );
}

export default ProductList;
