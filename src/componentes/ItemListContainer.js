import React from "react";
import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';

const ItemListContainer=({gretting})=> {
    
    return(
        <div className="ItemContainer">
            <h1>{gretting}</h1>
            <button className="btn-acceder">Acceder</button>
        </div>
    )
}

export default ItemListContainer;