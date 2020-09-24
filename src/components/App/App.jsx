import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx";
import { Background, Painel } from "./App.style";

function App() {
    return <Background>
            <Painel> 
                <Header/>
                <Main
                    left = {<div>produtos disponiveis</div>}
                    middle = {<div>lista de compras</div>}
                    right = {<div>estatiscas</div>}/>
            </Painel>
    </Background>
}

export default App