import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FavoritosContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const { toggleFavorito } = useContext(FavoritosContext);

  if (!producto || !producto.nombre) {
    return <div>Cargando...</div>;
  }

  const handleAgregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };
    agregarProducto(productoCarrito);
  };

  const handleAgregarAFavoritos = () => {
    toggleFavorito(producto);
  };

  const detallesDescripcion = producto.descripcion
    .split(".")
    .filter((item) => item.trim() !== "");
  const detallesCaracteristicas = producto.caracteristicas
    ? producto.caracteristicas.split(".").filter((item) => item.trim() !== "")
    : ["No hay características disponibles"];

  return (
    <div className="contenido-productos-itemcount">
      <div className="detalle-imagen">
        <img
          className="producto-imagen-info"
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>

      <div className="detalle-producto">
        <div className="contenido-informacion-producto">
          <h2 className="info-nombre">{producto.nombreinfo}</h2>
          <p className="info-precio">${producto.precio}</p>
          
          <h3 className="caracteristicas-contenido">Características:</h3>
          <ul className="caracteristicas-product">
            {detallesCaracteristicas.map((caracteristica, index) => (
              <li key={index}>{caracteristica.trim()}</li>
            ))}
          </ul>
          <h3 className="informacion-contenido">
            Lo que tenés que saber de este producto:
          </h3>
          <ul className="contenido-product">
            {detallesDescripcion.map((detalle, index) => (
              <li key={index}>{detalle.trim()}</li>
            ))}
          </ul>
        </div>
      </div>

      <ItemCount
        stock={producto.stock}
        agregarAlCarrito={handleAgregarAlCarrito}
        agregarFavoritos={handleAgregarAFavoritos}
      />
    </div>
  );
};

export default ItemDetail;
