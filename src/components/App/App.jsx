import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import LineChart from "../LineChart/LineChart";
import Main from "../Main/Main.jsx";
import ShoppingList from "../ShoppingList/ShoppingList";
import { Background, Painel } from "./App.style";
import productsMock from "../../mocks/products.json";

function App() {

    const [healthy, setHealthy] = useState(20)
    const [products, setproducts] = useState(productsMock.products)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    function handleToggle(id) {
        const newProducts = products.map(
            product => product.id === id ? {...product, checked: !product.checked } : product 
        )
        setproducts(newProducts)
    }

    useEffect(function(){
        setTimeout(()=>{
            setHealthy(90)
        }, 3000)
    },[])

    return <Background>
            <Painel> 
                <Header/>
                <Main
                    left = {<ShoppingList 
                                title = "produtos disponíveis:" 
                                products = {products}
                                onToggle = {handleToggle}/>}
                    middle = {<ShoppingList title = "lista de compras:"/>}
                    right = {<div>estatiscas:
                                <LineChart
                                    color = {colors[0]}
                                    title = "saudável"
                                    percentage = {healthy}/>
                                <LineChart
                                    color = {colors[1]}
                                    title = "não tão saudável"
                                    percentage = {healthy}/>
                                <LineChart
                                    color = {colors[2]}
                                    title = "limpeza"
                                    percentage = {healthy}/>
                                <LineChart
                                    color = {colors[3]}
                                    title = "outros"
                                    percentage = {healthy}/>
                            </div>}/>
            </Painel>
    </Background>
}

export default App