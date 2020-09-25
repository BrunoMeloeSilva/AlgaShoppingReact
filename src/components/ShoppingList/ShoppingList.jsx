import React from "react";
import Checkbox from "../shared/Checkbox/Checkbox";
import { Wrap, Title, Array } from "./ShoppingList.style";

function ShoppingList(props) {
    return <Wrap>
                <Title>{ props.title }</Title>  
                <Array>
                    {
                        /* Esse props.products && , é devido um erro no React se colocar direto props.products.map... não funciona*/
                        props.products && props.products.map(
                            product => <Checkbox key = {product.id}
                                                 value = {product.checked} 
                                                 title = {product.name}
                                                 click = { () => props.onToggle(product.id) }/>)
                    }
                </Array>
    </Wrap>
}

export default ShoppingList