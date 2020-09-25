import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import LineChart from "../LineChart/LineChart";
import Main from "../Main/Main.jsx";
import ShoppingList from "../ShoppingList/ShoppingList";
import { Background, Painel } from "./App.style";
import productsMock from "../../mocks/products.json";
import extractPercentage from "../../utils/extractPercentage";

function App() {

    const [products, setproducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    useEffect(() => {
        const total = selectedProducts.reduce((total, product) => total + product.price, 0)
        setTotalPrice(total)
    },[selectedProducts])

    useEffect(() => {
        const newSelectedProducts = products.filter(product => product.checked)
        setSelectedProducts(newSelectedProducts)
    },[products])

    function handleToggle(id) {
        const newProducts = products.map(
            product => product.id === id ? {...product, checked: !product.checked } : product 
        )
        setproducts(newProducts)
    }

    return <Background>
            <Painel> 
                <Header/>
                <Main
                    left = {<ShoppingList 
                                title = "produtos disponíveis:" 
                                products = {products}
                                onToggle = {handleToggle}/>}
                    middle = {<ShoppingList title = "lista de compras:"
                                            products = {selectedProducts}
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
                            </div>}/>
            </Painel>
    </Background>
}

export default App