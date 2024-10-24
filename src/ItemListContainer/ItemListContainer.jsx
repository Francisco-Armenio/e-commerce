import { useEffect, useState } from "react";
import obtenerProductos from "../data/productos.js";
import ItemList from "./ItemList.jsx";
import useLoading from "../hooks/useLoading.jsx";
import ComponenteLoading from "../hooks/ComponenteLoading.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga } = useLoading();
  const {idCategoria} = useParams()


  useEffect(() => {
    mostrarCargando(); 

    obtenerProductos()
      .then((respuesta) => {
        if (idCategoria){
          const productosFiltrados = respuesta.filter( (producto) => producto.categoria === idCategoria )
          setProductos(productosFiltrados)
        } else{
          setProductos(respuesta); 
        }
      })
      .finally(() => {
        ocultarCargando(); 
      });
  }, [idCategoria]);

  console.log(cargando); 


  return (
    <div>
      {cargando ? <ComponenteLoading/> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;