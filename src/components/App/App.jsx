import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx";
import Checkbox from "../shared/Checkbox/Checkbox";
import { Background, Painel } from "./App.style";

function App() {

    const [lettuce, setLettuce] = useState(false)

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
                    right = {<div>estatiscas</div>}/>
            </Painel>
    </Background>
}

export default App