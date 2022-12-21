import React from "react";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer';
import Cart from './componentes/Cart';
import CartProvider from "./CartContext";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

const App = () => {

    return(
        <div className="box">
            
            <BrowserRouter>
                <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={ <ItemListContainer greeting= {"Termoland - Tienda online Argentina - Envíos a todo el país"}/>} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
                </Routes> 
                </CartProvider> 
            </BrowserRouter>
        </div>
    )
}

export default App;

