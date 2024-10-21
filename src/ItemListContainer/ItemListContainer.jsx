import { useEffect, useState } from "react";
import obtenerProductos from "../data/productos.js";
import ItemList from "./ItemList.jsx";
import useLoading from "../hooks/useLoading.jsx";
import ComponenteLoading from "../hooks/ComponenteLoading.jsx";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga } = useLoading();

  useEffect(() => {
    mostrarCargando(); 

    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta); 
      })
      .finally(() => {
        ocultarCargando(); 
      });
  }, []);

  console.log(cargando); 


  return (
    <div>
      {cargando ? <ComponenteLoading/> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;