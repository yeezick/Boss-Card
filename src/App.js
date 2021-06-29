import { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import ProductList from "./components/ProductList"
import "./App.css";

function App() {
  const [cardList, setCardList] = useState([]);
  const [toggleRender, setToggleRender] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      const resp = await axios.get(baseURL, config);
      setCardList(resp.data.records)
      // remove console log before publishing
      // console.log(resp.data.records)
    }
    fetchCards();
  },[])

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home cardList={cardList}/>
      </Route>
      <Route path="/products">
        <ProductList cardList={cardList}/>
      </Route>
      <Route path="/create">
        <Form setToggleRender={setToggleRender} />
      </Route>
      <Route path="/edit/:id">
        <Form cardList={cardList} setToggleRender={setToggleRender}/>
      </Route>
    </div>
  );
}

export default App;

// post mvp give themes for cards, make an array of theme objects
// in the database add another column with themese that allows users to visually customize
// change app field names to camelCase
