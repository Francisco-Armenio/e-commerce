import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import { FavoritosContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const { toggleFavorito } = useContext(FavoritosContext);

  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  if (!producto || !producto.nombre) {
    return <div>Cargando...</div>;
  }

  const handleAgregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };
    agregarProducto(productoCarrito);
    setMostrarItemCount(false); 
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

          <h3 className="informacion-contenido">
            Lo que tenés que saber de este producto:
          </h3>
          <ul className="contenido-product">
            {detallesDescripcion.map((detalle, index) => (
              <li key={index}>{detalle.trim()}</li>
            ))}
          </ul>
          <h3 className="caracteristicas-contenido">Características:</h3>
          <ul className="caracteristicas-product">
            {detallesCaracteristicas.map((caracteristica, index) => (
              <li key={index}>{caracteristica.trim()}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="botones-mostrar-esconder">
      {
        mostrarItemCount ? (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={handleAgregarAlCarrito}
          />
        ) : (
          <>
          <div className="botones-invisibles">
          <Link to="/cart" className="button-invisible-ir-al-carrito">Ir al carrito</Link>
          <Link to="/" className="button-invisible-seguir-comprando">Seguir comprando</Link>
          </div>
          </>
        )
      }
      </div>
    </div>
  );
};

export default ItemDetail;
