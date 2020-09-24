import styled from "styled-components";
import background from "../../assets/background.svg";

export const Background = styled.div`
    height: 100vh;
    
    background-color: #F8F5EC;
    background-image: url( ${background} );
    background-size: cover;
    background-position: center center;
    
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Painel = styled.div`
    width: 734px;
    height: 574px;
    background-color: #FFF;
    box-shadow: 0 3px 10px rgba(0,0,0,.15);
    border-radius: 20px;
`