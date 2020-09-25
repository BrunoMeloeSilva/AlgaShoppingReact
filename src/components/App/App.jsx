import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import LineChart from "../LineChart/LineChart";
import Main from "../Main/Main.jsx";
import Checkbox from "../shared/Checkbox/Checkbox";
import { Background, Painel } from "./App.style";

function App() {

    const [lettuce, setLettuce] = useState(false)
    const [healthy, setHealthy] = useState(20)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    useEffect(function(){
        setTimeout(()=>{
            setHealthy(90)
        }, 3000)
    },[])

    return <Background>
            <Painel> 
                <Header/>
                <Main
                    left = {<div>produtos disponiveis:
                        <Checkbox
                            title = "Batata"
                            value = {lettuce}
                            click = {() => setLettuce(!lettuce)}/>
                    </div>}
                    middle = {<div>lista de compras</div>}
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