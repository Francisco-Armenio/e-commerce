import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext);

    return (
        <div>
            {
                carrito.map((productoCarrito, index) => (
                    <li key={productoCarrito.id || index}>  
                        <img src={productoCarrito.imagen} alt={productoCarrito.nombre} />
                        <p>{productoCarrito.nombre}</p>
                        <p>Cantidad: {productoCarrito.cantidad}</p>
                        <p>Precio: ${productoCarrito.precio}</p>
                        <p>Precio parcial: ${productoCarrito.cantidad * productoCarrito.precio}</p>
                        <button onClick={ () => borrarProducto(productoCarrito.id)}>Borrar</button>
                    </li>
                ))
            }

            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>

        </div>
    );
};

export default Cart;
