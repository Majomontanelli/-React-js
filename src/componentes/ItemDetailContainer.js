import ItemDetail from './ItemDetail'
import React , { useEffect, useState } from 'react';
import {productos} from '../app/Arrays';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [prod, setProd] = useState ([])

    const {detalleId} = useParams();

    useEffect(() => {
        const getProd= new Promise (resolve => {
            setTimeout(() =>{
                resolve(productos) 
            }, 1000)
        })
        getProd.then(res => setProd(res.find(product => product.id === parseInt(detalleId))));
    }, [])
    
    return(
        <ItemDetail prod={prod} />
    )
}
export default ItemDetailContainer;