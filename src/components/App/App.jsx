import React from "react";
import Header from "../Header/Header";
import LineChart from "../LineChart/LineChart";
import Main from "../Main/Main.jsx";
import ShoppingList from "../ShoppingList/ShoppingList";
import { Background, Painel } from "./App.style";
import extractPercentage from "../../utils/extractPercentage";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedProducts, selectSelectedProductsTotalPrice } from "../../store/Products/Products.selectors";
import { toggleProduct } from "../../store/Products/Products.actions";

function App() {

    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectSelectedProductsTotalPrice)
    const dispatch = useDispatch()

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    function handleToggle(id) {
        dispatch(toggleProduct(id))
    }

    return <Background>
            <Painel> 
                <Header/>
                <Main
                    left = {<ShoppingList 
                                title = "produtos disponíveis:" 
                                onToggle = {handleToggle}/>}
                    middle = {<ShoppingList title = "lista de compras:"
                                            displayOnlySelected
                                            onToggle = {handleToggle}/>}
                    right = {<div>estatiscas:
                                <LineChart
                                    color = {colors[0]}
                                    title = "saudável"
                                    percentage = {
                                        extractPercentage(selectedProducts.length,
                                        selectedProducts.filter(product => product.tags.includes('healthy')).length )
                                    }/>
                                <LineChart
                                    color = {colors[1]}
                                    title = "não tão saudável"
                                    percentage = {
                                        extractPercentage(selectedProducts.length,
                                        selectedProducts.filter(product => product.tags.includes('junk')).length )
                                    }/>
                                <LineChart
                                    color = {colors[2]}
                                    title = "limpeza"
                                    percentage = {
                                        extractPercentage(selectedProducts.length,
                                        selectedProducts.filter(product => product.tags.includes('cleaning')).length )
                                    }/>
                                <LineChart
                                    color = {colors[3]}
                                    title = "outros"
                                    percentage = {
                                        extractPercentage(selectedProducts.length,
                                        selectedProducts.filter(product => product.tags.includes('others')).length )
                                    }/>
                                    {/*Componente criado diretamente no corpo de outro, má pratica !*/}
                                    <div style={{marginTop: 12}}>
                                        <h2 style={{fontWeight: 400, fontSize: 12, color: '#00364A'}}>previsão de gastos:</h2>
                                        <div style={{fontSize: 24}}>
                                            { totalPrice.toLocaleString('pt-br', {
                                                                                    minimumFractionDigits: 2,
                                                                                    style: 'currency',
                                                                                    currency: 'BRL'
                                                                                })}
                                        </div>
                                    </div>
                            </div>
                        }/>
            </Painel>
    </Background>
}

export default App