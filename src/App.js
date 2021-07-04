import { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import AOS from "aos";
// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage";
import SingleCard from "./components/SingleCard";
import Form from "./components/Form";
import Footer from "./components/Footer";

// css
import "./App.css";
import "./css/card.css";
import 'aos/dist/aos.css';

function App() {
  const [cardList, setCardList] = useState([]);
  const [toggleRender, setToggleRender] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      const resp = await axios.get(baseURL, config);
      setCardList(resp.data.records);
      // remove console log before publishing
      // console.log(resp.data.records)
    };
    fetchCards();
  }, [toggleRender]);



  return (
    <div className="App">
      <Navbar />

      <Route exact path="/">
        <Home cardList={cardList} />
      </Route>
      <Route exact path="/products">
        <ProductsPage cardList={cardList} />
      </Route>
      <Route path="/products/:id">
        <SingleCard cardList={cardList} />
      </Route>
      <Route path="/create">
        <Form setToggleRender={setToggleRender} />
      </Route>
      <Route path="/edit/:id">
        <Form cardList={cardList} setToggleRender={setToggleRender} />
      </Route>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

      <Footer />
      </div>
    </div>
  );
}

export default App;

// post mvp give themes for cards, make an array of theme objects
// in the database add another column with themese that allows users to visually customize
// change app field names to camelCase
