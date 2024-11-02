import React, { useContext } from "react";
import { FavoritosContext } from "../context/CartContext"; // Verifica la ruta correcta

const Favoritos = () => {
    const { favoritos } = useContext(FavoritosContext); // Obtenemos los productos favoritos del contexto

    if (favoritos.length === 0) {
        return <div>No hay productos en favoritos.</div>;
    }

    return (
        <div>
            <h2>Productos Favoritos</h2>
            {favoritos.map((producto) => (
                <div key={producto.id}>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <p>{producto.nombre}</p>
                </div>
            ))}
        </div>
    );
};

export default Favoritos;
