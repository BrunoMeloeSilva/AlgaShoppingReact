import React from "react";
import Header from "../Header/Header";
import { Background, Painel } from "./App.style";

function App() {
    return <Background>
            <Painel> 
                <Header/>
            </Painel>
    </Background>
}

export default App