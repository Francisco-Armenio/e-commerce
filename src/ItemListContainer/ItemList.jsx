import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="product-container">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;