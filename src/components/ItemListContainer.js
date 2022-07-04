import React from "react";
// import { useEffect } from "react";
import ItemCount from "./ItemCount";
import ProductList from "./ItemList";

const ItemListContainer = () => {
  const onAdd = (cuenta) => {
    alert(`Gracias por comprar ${cuenta} Items`);
  };
  return (
    <>
      <ItemCount initial={1} stock={7} onAdd={onAdd} />
      <ProductList />
    </>
  );
};

export default ItemListContainer;
