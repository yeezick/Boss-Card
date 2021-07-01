import Carousel from "react-bootstrap/Carousel"
import SoloCard from "./SoloCard";
import {useParams} from "react-router-dom"


function ProductList({ cardList }) {
  const params = useParams();
 console.log(params)
 if (params) {
   return  (<section>
    <h2 className="product-list-header">Client-Made Products</h2>
    <Carousel>
    {cardList.map((card) => (
      <Carousel.Item key={card.id+0}>
        <SoloCard key={card.id} soloCard={card} />
      </Carousel.Item>
    ))}
    </Carousel>
  </section>)
 } else {

   return (
     <section>
      <h2 className="product-list-header">Client-Made Products</h2>
      {cardList.map((card) => (
        <div key={card.id+0}>
          <SoloCard key={card.id} soloCard={card} />
        </div>
      ))}
    </section>
  );
}
}

export default ProductList;
