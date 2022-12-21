import React from "react";
import { useCartContext } from '../CartContext';
import "../assets/styles/ItemCart.css"

const ItemCart = ({ prod }) => {
    const { borrarProd } = useCartContext();
    return(
        <div className='item-cart align-items-center'>
            <img src={prod.img} alt="termo" />
            <div>
                <p className="mb-1"> Marca: {prod.nombre}</p>
                <p className="mb-1"> Descripción: {prod.descripción}</p>
                <p className="mb-1"> Cantidad: {prod.contador}</p>
                <p className="mb-1"> Precio: ${prod.precio}</p>
                <p className="mb-1"> Subtotal: ${prod.contador * prod.precio} </p>
                <button onClick={() => borrarProd(prod.id)}>Eliminar</button>
            </div>
        </div>
    )
}


export default ItemCart;