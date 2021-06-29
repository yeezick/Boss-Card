import Card from "./Card";

function ProductList({ cardList }) {
  return (
    <section>
      {cardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}

export default ProductList;
