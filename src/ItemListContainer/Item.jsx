const Item = ({ producto }) => {
    
    if (!producto) {
        return <p>Cargando...</p>; 
    }

    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>            
        </div>
    );
};

export default Item;
