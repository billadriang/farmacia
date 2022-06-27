import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({saludo, nombre, apellido, edad}) => {
    return (
    <>
    <h3>{saludo}</h3>
    <p>Mi nombre es {nombre} {apellido} y tengo {edad} años </p>
    {/*Stock hardcoded*/}

    <ItemCount stock={7}/>
    </>
    )
}

export default ItemListContainer;
