const Item = ({ producto }) => {

    if (!producto) {
        return <p>Cargando...</p>;
    }

    return (
        
            <div className="product-card">
                <img src={producto.imagen} alt={producto.nombre} className="product-card-image" />
                <div className="product-card-info">
                    <h2 className="product-card-title">{producto.nombre}</h2>
                    <p className="product-card-description">{producto.descripcion}</p>
                    <div className="product-card-price">
                        <span className="product-card-price-current">${producto.precio}</span>
                        <span className="product-card-price-old">${producto.precio}</span>
                    </div>
                    <button className="product-card-button">Agregar al Carrito</button>
                </div>
            </div>
        
    );
};

export default Item;
