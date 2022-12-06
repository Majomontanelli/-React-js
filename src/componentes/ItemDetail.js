import React, { useState } from 'react';
import { useCartContext } from '../CartContext';
import ItemCount from "./ItemCount";
import "../assets/styles/ItemDetail.css";
import { Link } from 'react-router-dom';

export const ItemDetail = ({prod}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProd} = useCartContext();

    const onAdd = (contador) => {
        setGoToCart(true);
        addProd(prod, contador);
    }

    return(
        <div className='container'>
            <div className='detail'>
                <img className='detail-img' src={prod.img} alt="detalle" />
                <div className="content">
                    <h1>{prod.nombre}</h1>
                    {
                        goToCart ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount inicio={1} stock={10} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;