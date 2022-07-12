import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// PARA BILL DEL FaceRetouchingNaturalOutlined, CREA UN ARRAY DE PRODUCTOS, YA LUEGO CONSUMIRAS ESTO DE UNA DB
const initialProducts = [
  {
    id: 1,
    title: "PARACETAMOL",
    price: "200$",
    pictureUrl:
      "https://www.farmadireta.com.br/imagens-complete/1000x1000/paracetamol-750mg-com-20-comprimidos-717823c183.jpg",
  },
  {
    id: 2,
    title: "IBUPROFENO",
    price: "200$",
    pictureUrl:
      "https://d2qp15ca4v4icd.cloudfront.net/Custom/Content/Products/53/09/5309_ibuprofeno-ache-100mg-ml-caixa-com-1-frasco-gotejador-com-20ml-de-suspensao-de-uso-oral-p7896181919698_m1_637217815857485290.jpg",
  },
  {
    id: 3,
    title: "METFORMINA",
    price: "200$",
    pictureUrl:
      "https://stevia.vtexassets.com/arquivos/ids/155982/Metformina-500mg-60cap-padrao.jpg?v=637414020055200000",
  },
];

// CREA LA PROMESA Y SIMULA LA ASINCRONIA CON UN SETTIMEOUT
const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(initialProducts);
  }, 2000);
});

const ProductList = () => {
  // CREA UN USESTATE PARA REALIZAR UN CAMBIO EN LA VARIABLE
  const [initialProducts, setInitialProducts] = useState([]);

  //   CREA UN USEEFFECT PARA LLAMAR A LA PROMESA
  useEffect(() => {
    promesa
      // TIENES QUE PASARLE DATA PARA QUE RECIBA EL ARRAY
      .then((data) => {
        // AQUI REALIZAS EL CAMBIO EN EL ARRAY ASIGNANDOSELO AL SET
        setInitialProducts(data);
      })
      .catch(() => {
        console.log("todo mal pana");
      });
  }, []);
  return (
    <>
      <Item />
      {/* DEBES CREAR UN MAP PARA MOSTRAR EL AARAY YA QUE EN JSX NO SE MUESTRAN SINO SON EXPRESIONES, Y EL MAP HACE UNA COPIA */}
      <Grid container>
        {initialProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia
              component="img"
              height="140"
              image={product.pictureUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2> {product.title}</h2>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                INSERTE PLACEHOLDER CREATIVO
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Añadir al carrito</Button>
              <Button size="small">Detalles</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  );
};
export default ProductList;
