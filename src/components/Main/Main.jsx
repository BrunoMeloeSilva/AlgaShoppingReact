import React from "react";
import { MainStyle } from "./Main.style";

function Main(props) {
    return <MainStyle>
        <div>{ props.left }</div>
        <div>{ props.middle }</div>
        <div>{ props.right }</div> 
    </MainStyle>
}

export default Main