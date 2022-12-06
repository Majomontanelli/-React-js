import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import "../assets/styles/Cart.css";


const Cart = () => {
    const { carrito, totalPrice } = useCartContext();

   // const ordenCompra= {
       // dato: {
       //     nombre: "Lionel",
       //     email: "xxx@gmail.com",
       //     telefono: "394839022",
       //     dirección: "lalalal"
      //  },
      //  items: carrito.map(prod=>({ id: prod.id, marca: prod.nombre, precio: prod.precio, cantidad: prod.contador})),
     //   total: totalPrice(),
    //}

   // const handClick= () => {
   //     const db= getFirestore();
   //     const ordenColection= colection(db, 'orders');
    //    addDoc(ordenColection, ordenCompra)
     //   .then(({ id }) => console.log(id))
   // }

    if(carrito.length === 0) {
        return(
            <div className="cart-vacio">
                <p>No hay productos en el carrito</p>
                <Link to='/'>Ir a la Tienda</Link>
            </div>
        )
    }
    return(
        <div  className="cart-container">
           <h1 className="carrito-container">Carrito</h1>
            <p>total: ${totalPrice()}</p>
           
        </div>
    )
}

export default Cart;

//<button onClick={handClick}>Emitir compra</button>