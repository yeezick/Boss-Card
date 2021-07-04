import { useEffect } from "react";
import Intro from "./Intro";
import Market from "./Market";
import ProductList from "./ProductList";

function Home ({cardList}) {
  return (
    <main>
      <Intro />
      <Market/>
      <ProductList cardList={cardList}/>
    </main>
  )
}

export default Home;