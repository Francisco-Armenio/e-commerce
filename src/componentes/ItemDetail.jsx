import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto, agregarAlCarrito }) => {
    if (!producto || !producto.nombre) {
        return <div>Cargando...</div>;
    }
    
    const handleAgregarAlCarrito = (contador) => {
        const productoCarrito = {...producto, cantidad: contador}
        console.log(productoCarrito);
        
    };

    const detallesDescripcion = producto.descripcion.split('.').filter(item => item.trim() !== '');
    const detallesCaracteristicas = producto.caracteristicas.split('-').filter(item => item.trim() !== '');

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
                    <h3>Lo que tenés que saber de este producto:</h3>
                    <ul className="producto-descripcion-info">
                        {detallesDescripcion.map((detalle, index) => (
                            <li key={index}>{detalle.trim()}</li>
                        ))}
                    </ul>
                    <h3>Características:</h3>
                    <ul className="producto-caracteristicas-info">
                        {detallesCaracteristicas.map((caracteristica, index) => (
                            <li key={index}>{caracteristica.trim()}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="seccion-derecha">            
                <ItemCount stock={producto.stock} agregarAlCarrito={handleAgregarAlCarrito} />              
            </div>
        </div>
    );
};

export default ItemDetail;


/*
<h3>Características:</h3>
                    <ul className="producto-caracteristicas-info">
                        {detallesCaracteristicas.map((caracteristica, index) => (
                            <li key={index}>{caracteristica.trim()}</li>
                        ))}
                    </ul>*/