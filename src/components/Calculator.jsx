import React from "react";
import { connect } from "react-redux";

function Calculator(props) {
    return <>
        <input type="text" placeholder="Informe valor a"/>
        <input type="text" placeholder="Informe valor b"/>
        <button>Somar</button>
        <div>Resultado: {props.result}</div>
    </>
}

function mapStateToProps(state) {
    return {
        result: state.calculator
    }
}

export default connect(mapStateToProps)(Calculator)