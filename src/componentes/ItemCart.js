import React from "react";
import {useCartContext, CartContext} from '../CartContext';

const ItemCart = ({ prod }) => {
    const { borrarProd } = useCartContext(CartContext);
    return(
        <div className='item-cart'>
            <img src={prod.img} alt="termo" />
            <div>
                <p> Marca: {prod.nombre}</p>
                <p> Descripción: {prod.descripción}</p>
                <p> Precio: ${prod.precio}</p>
                <p> Subtotal: ${prod.contador * prod.precio} </p>
                <button onClick={() => borrarProd(prod.id)}>Eliminar</button>
            </div>
        </div>
    )
}


export default ItemCart;