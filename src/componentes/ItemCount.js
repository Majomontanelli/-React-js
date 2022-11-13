import "../assets/styles/ItemCount.css";
import React, { useState, useEffect } from "react";
import "../assets/styles/ItemCount.css";

const ItemCount = ({ inicio, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(inicio));

    const disminuir = () => {
        setCount (count - 1);
    }
    const  incrementar = () => {
        setCount (count + 1);
    }
    
    return(
        <div className="contador">
            <button disabled={count <= 1} onClick={disminuir}>-</button>
            <span className="number-count">{count}</span>
            <button disabled={count >= stock} onClick={incrementar}>+</button>
            <div>
                <button className="btn-add" disabled={stock <= 0} onClick={() => onAdd(count)}>Añadir al carrito</button>
            </div>

        </div>
    )

}
export default ItemCount;