import styled from "styled-components"

export const EstiloPergunta = styled.div`
    background-color: ${props => props.habilitado ? "#FFFFD4" : "white"};
    width: 340px;
    height: ${props => props.habilitado ? "131px" : "65px"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: ${props => props.revelarResposta ? "column" : "row"};
    align-items: center;
    margin-left: 37px;
    margin-bottom: 25px;
    text-decoration: ${props => props.respostaRiscada ? "line-through" : ""};
    text-decoration-color: ${props => props.acertei && "green"} ${props => props.errei && "red"} ${props => props.quaseErrei && "yellow"};
    color: ${props => props.acertei === "" ? "green" : props.errei === "" ? "red" : props.quaseErrei === "" ? "orange" : "black"};
    img {
            width: ${props => props.revelarResposta ? "85px" : "20px"};
            height: ${props => props.habilitado ? "15px" : "23px"} ${props => props.revelarResposta && "37px"};
            margin-left: ${props => props.revelarResposta ? "0px" : "190px"};
            margin-top: ${props => props.habilitado && "100px"};
            margin-right: 20px;
            color: ${props => props.habilitado && "#333333"};
            display: ${props => props.revelarResposta ? "none" : ""};
}
`
export const EstiloP = styled.p `
    font-weight: ${props => props.habilitado ? "400" : "700"};
    font-size: ${props => props.habilitado ? "18px" : "16px"};
    line-height: ${props => props.habilitado ? "22px" : "19px"};
    font-family: 'Recursive', sans-serif;
    margin-left: 15px;
    margin-top: ${props => props.habilitado && "100px"};
    width: 100%;
`
export const Botao = styled.button`
        width: 87px;
        height: 37px;
            span {
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                font-family: 'Recursive', sans-serif;
            }
        background-color: #FF3030;
        margin-top: 80px;
        margin: 5px;
        border-radius: 5px;
        border: none;
`
export const BotaoQuase = styled.button`
        width: 87px;
        height: 37px;
            span {
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                font-family: 'Recursive', sans-serif;
            }
        background-color: #FF922E;
        margin-top: 80px;
        margin: 5px;
        border-radius: 5px;
        border: none;
`
export const BotaoZap = styled.button`
        width: 87px;
        height: 37px;
            span {
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                font-family: 'Recursive', sans-serif;
            }
        background-color: #2FBE34;
        margin-top: 80px;
        margin: 5px;
        border-radius: 5px;
        border: none;
`
export const DivTexto = styled.div`
    width: 100%;
    height: 50%;
    margin-top: 18px;

    display: flex;
`
export const DivImagem = styled.div`
    img {
            width: ${props => props.revelarResposta ? "85px" : "20px"};
            height: ${props => props.habilitado ? "15px" : "23px"} ${props => props.revelarResposta && "37px"};
            margin-left: ${props => props.revelarResposta ? "0px" : "190px"};
            margin-top: ${props => props.habilitado && "100px"};
            color: ${props => props.habilitado && "#333333"};
            display: ${props => props.revelarResposta ? "none" : ""};
}
display: flex;
`