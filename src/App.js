import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>

        <NavBar />
        <ItemDetailContainer />
        <ItemListContainer />

      </BrowserRouter>
  );
};
export default App;
