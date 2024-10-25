import { useState, useEffect } from "react";
import obtenerProductos from "../data/productos.js";
import ItemDetail from "./ItemDetail.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { idProducto } = useParams();

    useEffect(() => {
        obtenerProductos()
            .then((data) => {
                const productoEncontrado = data.find((productoData) => productoData.id === Number(idProducto));
                setProducto(productoEncontrado);
            });
    }, [idProducto]);  

    const agregarAlCarrito = () => {
        console.log("Producto agregado al carrito:", producto);
    };

    return (
        <div>
            <ItemDetail producto={producto} />
            
        </div>
    );
};

export default ItemDetailContainer;
