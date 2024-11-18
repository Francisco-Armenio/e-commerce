import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext);

    if(carrito.length === 0){
        return(
            <div className="carrito-vacio">
                <img className="imagen-carrito-abandonado" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLSqbh3gSFRejYJY9ygZXZSCrFXbgkUzK_1oDNVFs0SLri1TCc0jOavi3S5mB6uAH61U&usqp=CAU" alt="" />
                <h2 className="texto-principal">¡Oops! Aún no has agregado nada al carrito.</h2>
                <p className="texto-secundario">¿Qué esperas para comenzar a comprar?</p>
                <Link to="/" className="volver-al-inicio">Descubrir productos</Link>
            </div>
        )
    }

    return (
        <div className="carrito-lleno">
            {
                carrito.map((productoCarrito, index) => (
                    <li key={productoCarrito.id || index} className="lista-productos-carrito">  
                        <img className="imagen-de-producto" src={productoCarrito.imagen} alt={productoCarrito.nombre} />
                        <p className="nombre-en-carrito">{productoCarrito.nombre}</p>
                        <p className="cantidad-de-productos">Cantidad: {productoCarrito.cantidad}</p>
                        <p className="precio-de-producto">Precio: ${productoCarrito.precio}</p>
                        <p className="precio-parcial-producto">Precio parcial: ${productoCarrito.cantidad * productoCarrito.precio}</p>
                        <button className="boton-borrar-producto-individual" onClick={ () => borrarProducto(productoCarrito.id)}>Borrar</button>
                    </li>
                ))
            }
            <div className="parte-baja-del-carrito-lleno">
                <h2 className="total-valor-productos">Precio total: ${precioTotal()}</h2>
                <button className="borrar-carrito-completo" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    );
};

export default Cart;
