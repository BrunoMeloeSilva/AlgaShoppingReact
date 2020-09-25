import React from "react";
import { Container, Indicator } from "./Checkbox.style";

function Checkbox(props) {
    return <Container onClick = {props.click}>
        <Indicator value = {props.value} />{ props.title }
    </Container>
}

export default Checkbox