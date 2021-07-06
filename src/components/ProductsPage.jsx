/**
 * component create due to fixed header, productList component needed an outer div to account for necessary margin-top
 */

import ProductList from "./ProductList";

function ProductsPage({ cardList }) {
  return (
    <section className="product-list-container">
      <ProductList cardList={cardList} />
    </section>
  );
}
export default ProductsPage;
