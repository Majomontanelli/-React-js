import React, { useEffect, useState }from "react";
import { productos } from "../app/Arrays";
import ItemList from "./ItemList";
import "../assets/styles/ItemListContainer.css";
import { useParams } from "react-router-dom";



export const ItemListContainer=({greeting})=> {
    const [prod, setProd] = useState ([])

    const {categoryId} = useParams();

    useEffect(() => {
        const getProd= new Promise (resolve => {
            setTimeout(() =>{
                resolve(productos) 
            }, 1000)
        })
        if(categoryId){
            getProd.then(res => setProd(res.filter(product => product.categoria === categoryId)));
        }else{
        getProd.then(res => setProd(res))
        }
    }, [categoryId])

    return(
        <div className="ItemContainer">
        <h1>{greeting}</h1>
        <ItemList prod={prod} />
        </div>
    
    )
}

export default ItemListContainer;