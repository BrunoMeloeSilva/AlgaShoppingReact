import React from "react";
import { Container, ProgressBar } from "./LineChart.style";

function LineChart(props) {
    return <Container>
        <span>{ props.title }</span>
        <ProgressBar 
            percentage = { props.percentage }
            color = { props.color }/>
    </Container>
}

export default LineChart