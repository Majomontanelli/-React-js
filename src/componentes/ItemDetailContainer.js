import ItemDetail from './ItemDetail'
import React , { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [data, setData] = useState ([])

    const { detalleId } = useParams();

    useEffect(() => {
        const querydb= getFirestore();
        const queryDoc = doc(querydb,'productos', detalleId)
        getDoc(queryDoc)
        .then(res => setData({ id: res.id, ...res.data()}))
        // const getProd= new Promise (resolve => {
       //    setTimeout(() =>{
       //         resolve(productos) 
       //    }, 1000)
       //})
       // getProd.then(res => setProd(res.find(product => product.id === parseInt(detalleId))));
    }, [detalleId])
    
    return(
        <ItemDetail data={data} />
    )
}
export default ItemDetailContainer;