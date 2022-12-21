import Item from "./Item";
import React from "react";

export const ItemList= ({ data=[] }) => {
    return(
        data.map(productos => <Item key={productos.id} info={productos}/>)
    )
}

export default ItemList;