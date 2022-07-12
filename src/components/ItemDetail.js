// function ItemDetail({ item }) {

//     return <>
//              …
//              // Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio
//              ...
//   </>;

//   }
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

const initialProducts = [
  {
    id: 1,
    title: "PARACETAMOL",
    price: "200$",
    pictureUrl:
      "https://www.farmadireta.com.br/imagens-complete/1000x1000/paracetamol-750mg-com-20-comprimidos-717823c183.jpg",
    desc:
      "El acetaminofeno se usa para aliviar el dolor leve o moderado de las cefaleas, dolores musculares, períodos menstruales, resfriados, y los dolores de garganta, , muelas, espalda, así como de las reacciones a las vacunas (inyecciones) y para reducir la fiebre. El acetaminofeno también se puede usar para aliviar el dolor de la osteoartritis (artritis causada por la ruptura del revestimiento de las articulaciones). El acetaminofeno pertenece a una clase de medicamentos llamados analgésicos y antipiréticos (reductores de la fiebre). Su acción consiste en cambiar la manera en que el cuerpo responde al dolor.",
  },
];

const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(initialProducts);
  }, 2000);
});

const ItemDetail = () => {
  const [initialProducts, setInitialProducts] = useState([]);

  useEffect(() => {
    promesa
      .then((data) => {
        setInitialProducts(data);
      })
      .catch(() => {
        console.log("todo mal pana");
      });
  }, []);
  return (
    <>
      {initialProducts.map((product) => (
        <Card key={product.id}>
          <Typography gutterBottom variant="h5" component="div">
            <h1> {product.title}</h1>
          </Typography>
          <CardMedia
            component="img"
            height="auto"
            maxwidth="100%"
            image={product.pictureUrl}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="body5" color="text.primary">
              <h2>{product.price}</h2>
            </Typography>
            <Button size="small">Añadir al carrito</Button>

            <Stack spacing={1}>
              <Rating name="size-large" defaultValue={4} size="large" />
            </Stack>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
export default ItemDetail;
