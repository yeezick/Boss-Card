
import Card from "./Card";


function ProductList({ cardList }) {
  return (
    <section>
      {cardList.map((card) => (
        <div key={card.id+0}>
          <Card key={card.id} card={card} />
        </div>
      ))}
    </section>
  );
}

export default ProductList;
