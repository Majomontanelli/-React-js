import React from "react";
import "../assets/styles/Card.css";

export const Item = ({info}) => {

    return(
            <a href="" className="card">
                <img src={info.img} alt="termo" />
                <h2 className="name-card">{info.nombre}</h2>
                <p className="desc-card">{info.descripción}</p>
                <p className="price-card">${info.precio}</p>
            </a>
    )
}

export default Item;