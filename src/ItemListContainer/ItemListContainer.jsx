import { useEffect, useState } from "react"
import obtenerProductos from "../data/productos.js"
import ItemList from "./ItemList.jsx"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])


    useEffect(() =>{
        obtenerProductos()
        .then((respuesta) => {
            setProductos(respuesta);
        })
    })


  return (
    <div>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer