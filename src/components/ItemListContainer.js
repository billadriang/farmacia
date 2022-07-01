import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const onAdd = (cuenta) => {
    alert(`Gracias por comprar ${cuenta} Items`);
  };
  return (
    <>
      <ItemCount initial={1} stock={7} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
