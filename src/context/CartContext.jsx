import { createContext, useState } from "react";

const CartContext = createContext();
const FavoritosContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const agregarProducto = (productoNuevo) => {
        const condicion = estaEnElCarrito(productoNuevo.id); // Asegúrate de usar `productoNuevo.id`
        if (condicion) {
            let nuevoCarrito = [...carrito];
            nuevoCarrito.forEach((productoCarrito) => {
                if (productoCarrito.id === productoNuevo.id) {
                    productoCarrito.cantidad += productoNuevo.cantidad; // Incrementar la cantidad
                }
            });

            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, productoNuevo]); // Agregar nuevo producto
        }
    };

    const estaEnElCarrito = (idProducto) => {
        return carrito.some((productoCarrito) => productoCarrito.id === idProducto);
    };

    const toggleFavorito = (producto) => {
        const esFavorito = favoritos.some(fav => fav.id === producto.id);

        if (esFavorito) {
            setFavoritos(favoritos.filter(fav => fav.id !== producto.id));
        } else {
            setFavoritos([...favoritos, producto]);
        }
    };

    const cantidadTotal = () => {
        return carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((total, productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio), 0);
    };

    const borrarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto);
        setCarrito(productosFiltrados);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    console.log("Carrito:", carrito);
    console.log("Favoritos:", favoritos);

    return (
        <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito }}>
            <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
                {children}
            </FavoritosContext.Provider>
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext, FavoritosContext };
