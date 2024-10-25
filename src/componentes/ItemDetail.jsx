import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto, agregarAlCarrito }) => {
    if (!producto || !producto.nombre) {
        return <div>Cargando...</div>;
    }

    // Definimos `detallesDescripcion` dividiendo la descripción del producto en líneas
    const detallesDescripcion = producto.descripcion?.split("-").filter((item) => item);

    return (
        <div className="contenido-productos-itemcount">
            <div className="seccion-izquierda">
                <div className="contenido-imagen-grande">
                    <img className="product-imagen-info" src={producto.imagen} alt={producto.nombre} />
                </div>
            </div>

            <div className="seccion-centro">
                <div className="contenido-informacion-producto">
                    <h2 className="producto-nombre-info">{producto.nombreinfo}</h2>
                    <p className="producto-precio-info">${producto.precio}</p>
                    <p className="producto-color-info">Color: {producto.color}</p>
                    <p className="producto-descripcion-info">{producto.descripcion}</p>
                </div>
            </div>

            <div className="seccion-derecha">            
                <ItemCount stock={7} agregarAlCarrito={agregarAlCarrito} />              
            </div>
        </div>


    );
};

export default ItemDetail;




























/*<div className="product-detail">
      <div className="product-image-detail">
        <img className="product-imagen-info" src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="product-info">
        <h2 className="product-nombre-info">{producto.nombre}</h2>
        <p className="product-descripcion-info">{producto.descripcion}</p>
        <p className="product-precio-info">${producto.precio}</p>
        {producto.descuento && <span className="badge">Descuento {producto.descuento}%</span>}
        <p className="product-precio-info">{producto.stock > 0 ? `Stock disponible: ${producto.stock}` : "Producto agotado"}</p>
        <button className="boton-de-compra-info" onClick={agregarAlCarrito} disabled={producto.stock === 0}>Agregar al Carrito</button>
        <ItemCount stock={7} agregarAlCarrito={agregarAlCarrito} />
      </div>
    </div>*/