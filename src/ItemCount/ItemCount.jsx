
import React, { useState } from 'react';

const ItemCount = ({ stock, agregarAlCarrito, agregarFavoritos }) => {
    const [count, setCount] = useState(1);
    

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='boton-stock'>
            <button className='boton-comprar' onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
            <button className='favoritos' onClick={() => agregarFavoritos(count)}>Agregar a Favoritos</button>

            <div className='contador'>
                <button className='boton-restar' onClick={disminuir}>-</button>
                <p className='boton-count'>{count}</p>
                <button className='boton-sumar' onClick={aumentar}>+</button>
            </div>
        </div>

    );
};

export default ItemCount;
