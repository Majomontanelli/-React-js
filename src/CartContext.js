import React, {useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext= () => useContext(CartContext);

const CartProvider = ({ children }) => {
    //almaceno carrito
    const [carrito, setCarrito] = useState([]);

    const addProd = (item, newQuantity) => {
        const newCarrito = carrito.filter(prod => prod.id !== item.id);
        newCarrito.push ({...item, contador: newQuantity});
        setCarrito(newCarrito)
    }

    console.log("carrito:", carrito)

   // función para totales
    const totalPrice= () => {
        return carrito.reduce((prev, act) => prev + act.contador * act.precio, 0);
    }
    const totalProd= () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.contador, 0);


    //encontrar termo
    const enCarrito = (id) => carrito.find(prod => prod.id === id) ? true : false;
    //limpio carrito
    const clearCarrito = () => setCarrito([]);
    //borrar carrito
    const borrarProd = (id) => setCarrito(carrito.filter(prod => prod.id !== id));



    return(
        <CartContext.Provider value={{
            enCarrito,
            clearCarrito,
            borrarProd,
            addProd,
            totalPrice,
            totalProd, 
            carrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;