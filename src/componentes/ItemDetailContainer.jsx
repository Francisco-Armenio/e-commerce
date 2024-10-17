import { useState, useEffect } from "react"
import obtenerProductos from "../data/productos.js"
import ItemDetail from "./ItemDetail.jsx"
import ItemCount from "../ItemCount/ItemCount.jsx"

const ItemDetailContainer = () => {
    const [producto, setProducto, agregarAlCarrito] = useState({})

    useEffect(() =>{

        obtenerProductos()
            .then((data) => {
                const productoEncontrado = data.find( (productoData) => productoData.id === 2 )
                setProducto(productoEncontrado)
            })
    },[])

  return (
    <div>
        <ItemDetail producto = {producto}/>
        <ItemCount stock={7} agregarAlCarrito={agregarAlCarrito} />
    </div>
    
  )
}

export default ItemDetailContainer