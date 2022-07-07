import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
};
export default App;
