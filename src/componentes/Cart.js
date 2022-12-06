import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";


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
           <h1>Carrito</h1>
            <p>total: {totalPrice()}</p>
        </>
    )
}

export default Cart;