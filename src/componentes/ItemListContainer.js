import React, { useEffect, useState }from "react";
import ItemCount from "./ItemCount";
import { productos } from "../app/Arrays";
import ItemList from "./ItemList";
import "../assets/styles/ItemListContainer.css";



export const ItemListContainer=({greeting})=> {
    const [prod, setProd] = useState ([])

    useEffect(() => {
        const getProd= new Promise (resolve => {
            setTimeout(() =>{
                resolve(productos) 
            }, 1000)
        })
        getProd.then(res => setProd(res))
    }, [])


    const onAdd = (contador) => {
        console.log(`Compraste ${contador} unidades`)
    }
    return(
        <div className="ItemContainer">
            <h1>{greeting}</h1>
        <ItemCount inicio={1} stock={5} onAdd={onAdd}/>
        <ItemList prod={prod} />
        </div>
    
    )
}

export default ItemListContainer;