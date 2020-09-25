import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sum } from "../store/Calculator/Calculator.actions";

function Calculator() {
    
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)

    return <>
        <input type="text" placeholder="Informe valor a"/>
        <input type="text" placeholder="Informe valor b"/>
        <button onClick = {() => { dispatch(sum(1,5)) }}>Somar</button>
        <div>Resultado: {result}</div>
    </>
}

export default Calculator