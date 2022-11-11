import React from "react";

const Item = ({producto}) => {
    const {id, nombre, descripcion, precio, img, color} = producto
    return(
        <div>
            <img src={producto.img} alt="Termo" />
            <p key={producto.id}>{producto.descripcion},{producto.color},{producto.precio}</p>
        </div>
    )
}

export default Item;