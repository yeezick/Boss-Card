import ProductList from "./ProductList"
function Home ({cardList}) {
  return (
    <main>
      <div> intro banner </div>
      <div>  product information</div>
      <ProductList cardList={cardList}/>
    </main>
  )
}

export default Home;