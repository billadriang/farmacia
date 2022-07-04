function Item({ id, title, price, pictureUrl }) {
  return (
    <div>
      <h3>{id}</h3>
      <h3>{title}</h3>
      <p>Precio: {price}</p>
      <p>url: {pictureUrl}</p>
    </div>
  );
}
export default Item;
