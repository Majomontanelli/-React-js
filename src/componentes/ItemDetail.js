import React, { useState } from 'react';
import { useCartContext } from '../CartContext';
import ItemCount from "./ItemCount";
import "../assets/styles/ItemDetail.css";
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProd} = useCartContext();

    const onAdd = (contador) => {
        setGoToCart(true);
        addProd(data, contador);
    }

    return(
        <div className='container'>
            <div className='detail'>
                <img className='detail-img' src={data.img} alt="detalle" />
                <div className="content">
                    <h1>{data.nombre}</h1>
                    <p>{data.descripción}</p>
                    <p>${data.precio} c/u</p>
                    {
                        goToCart ? <button className='btn-cart'><Link to='/cart'>Ir al carrito</Link></button> : <ItemCount inicio={1} stock={10} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;