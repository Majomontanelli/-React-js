import React from "react";
import { getFirestore, addDoc, collection} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import "../assets/styles/Cart.css";
import ItemCart from "./ItemCart";


const Cart = () => {
    const { carrito, totalPrice } = useCartContext();

    const ordenCompra= {
        dato: {
            nombre: "Lionel",
            email: "xxx@gmail.com",
            telefono: "394839022",
            dirección: "lalalal"
        },

        items: carrito.map(prod=>({ id: prod.id, marca: prod.nombre, precio: prod.precio, cantidad: prod.contador})),
        total: totalPrice(),
    }

    const handClick= () => {
        const db= getFirestore();
        const ordenCollection= collection(db, 'ordenes');
        addDoc(ordenCollection, ordenCompra)
       .then(({ id }) => console.log(id))
    }

    if(carrito.length === 0) {
        return(
            <div className="cart-vacio">
                <p>No hay productos en el carrito</p>
                <button><Link to='/'>Ir a la Tienda</Link></button>
            </div>
        )
    }
    return(
        <div className="carrito-container">
           <h1>Carrito</h1>
           <div>
           {carrito.map(prod => <ItemCart key= {prod.id} prod={prod} />)}
           </div>
           <p className="total-tam">Total: ${totalPrice()}</p>
            <div>
                <button onClick={handClick}>Confirmar compra</button>
                <button>Continuar comprando</button>
            </div>
        </div>
    )
}

export default Cart;

