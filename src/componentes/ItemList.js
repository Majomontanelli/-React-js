import Item from "./Item";
import React from "react";

export const ItemList= ({ prod=[] }) => {
    return(
        prod.map(productos => <Item key={productos.id} info={productos}/>)
    )
}

export default ItemList;