import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";


const Cart = () => {
    const { carrito, totalPrice } = useCartContext();
    
    if(carrito.length === 0) {
        return(
            <>
                <p>No hay productos en el carrito</p>
                <Link to='/'>Ir a la Tienda</Link>
            </>
        )
    }
    return(
        <>

            <p>total: {totalPrice()}</p>
        </>
    )
}

export default Cart;