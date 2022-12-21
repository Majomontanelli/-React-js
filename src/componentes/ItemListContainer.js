import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import "../assets/styles/ItemListContainer.css";
import { useParams } from "react-router-dom";



export const ItemListContainer=({greeting})=> {
    const [data, setData] = useState ([])

    const { categoryId } = useParams();

    useEffect(() => {
        const querydb= getFirestore();
        const queryCollection= collection(querydb, 'productos');
            
        if(categoryId) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoryId))
            getDocs(queryFilter)
               .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data()}))))
        }else {
            getDocs(queryCollection)
               .then(res => setData(res.docs.map((product) => ({ id: product.id, ...product.data()}))))
        }
    }, [categoryId])

    return(
        <div className="ItemContainer">
            <h1 className="greeting">{greeting}</h1>
            <ItemList data={data} />
        </div>
    
    )
}

export default ItemListContainer;