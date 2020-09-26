import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subtract, sum } from "../store/Calculator/Calculator.actions";

function Calculator() {
    
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return <>
        <input type="text" placeholder="Informe valor a" onChange = {e => setA(e.target.value)}/>
        <input type="text" placeholder="Informe valor b" onChange = {e => setB(e.target.value)}/>
        <button onClick = {() => dispatch(sum(a, b)) }>Somar</button>
        <button onClick = {() => dispatch(subtract(a, b)) }>Subtrair</button>
        <div>Resultado: {result}</div>
    </>
}

export default Calculator