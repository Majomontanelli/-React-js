import React, { useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { data } from "../app/Arrays";


const ItemListContainer=({gretting})=> {
    const [loading, setLoading] = useState([]);
    const [ListaTermos, setListaTermos] = useState([]);

    useEffect ( () => {
        data
        .then((res)=> setListaTermos(res.filter(item => item.color === "Verde") ))
        .catch((error) => console.log (error))
        .finally(() => setLoading(false))
    } , []);    
    return(
        <div className="ItemContainer">
            <h1>{gretting}</h1>
            <button className="btn-acceder">Acceder</button>
        </div>
    )
}

export default ItemListContainer;