import React from "react";
import { selectAllProducts, selectSelectedProducts } from "../../store/Products/Products.selectors";
import Checkbox from "../shared/Checkbox/Checkbox";
import { Wrap, Title, Array } from "./ShoppingList.style";
import { useSelector } from "react-redux";

function ShoppingList(props) {

    const products = useSelector( props.displayOnlySelected ? selectSelectedProducts : selectAllProducts)

    return <Wrap>
                <Title>{ props.title }</Title>  
                <Array>
                    {
                        products.map(product => <Checkbox key = {product.id}
                                                    value = {product.checked} 
                                                    title = {product.name}
                                                    click = { () => props.onToggle(product.id) }/>)
                    }
                </Array>
    </Wrap>
}

export default ShoppingList