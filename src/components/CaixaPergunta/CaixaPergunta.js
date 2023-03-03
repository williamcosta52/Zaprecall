import styled from "styled-components";
import setaPlay from "../../assets/seta_play.png";
import perguntas from "../../perguntas";
import setaVirar from "../../assets/seta_virar.png";
import erreiImg from "../../assets/icone_erro.png";
import quaseImg from "../../assets/icone_quase.png";
import acerteiImg from "../../assets/icone_certo.png";
import { useState } from "react";

export default function CaixaPergunta({ pergunta, novaArrPerguntas }){

    const [icone, setIcone] = useState(setaPlay);
    const [textoPergunta, setTextoPergunta] = useState(pergunta);
    const [virarCarta, setVirarCarta] = useState(false);
    const [cardClicado, setCardClicado] = useState(null);
    const [revelarResposta, setRevelarResposta] = useState(false);
    const [acertei, setAcertei] = useState(undefined);
    const [errei, setErrei] = useState(undefined);
    const [quaseErrei, setQuaseErrei] = useState(undefined);
    const novoObjPerguntas = {...perguntas};

    return (
        <EstiloPergunta habilitado={virarCarta} revelarResposta={revelarResposta}>
            <DivTexto>
                <EstiloP >{textoPergunta}</EstiloP>
            </DivTexto>
            <DivImagem>
                <img alt="seta-play" src={icone} onClick={MostrarPergunta} />
                {errei}
                {quaseErrei}
                {acertei}
            </DivImagem>
        </EstiloPergunta>
    )
    function MostrarPergunta(){

        if (pergunta){
            setVirarCarta(true);
            setIcone(setaVirar);
            setCardClicado(pergunta);
        }
        for (let i = 0; i < novaArrPerguntas.length; i++){
            if (textoPergunta === novaArrPerguntas[i]){
                setTextoPergunta(novoObjPerguntas[i].question);
            }
        }
        if (virarCarta === true){
            setRevelarResposta(true);
            for (let i = 0; i < textoPergunta.length; i++){
                if (textoPergunta === novoObjPerguntas[i].question){
                    setTextoPergunta(novoObjPerguntas[i].answer);
                    setErrei(<Botao><span>Não lembrei</span></Botao>)
                    setQuaseErrei(<BotaoQuase><span>Quase não lembrei</span></BotaoQuase>)
                    setAcertei(<BotaoZap><span>Zap!</span></BotaoZap>)
                }
            }
        }
    }
}
function erreiResposta(){}
function quaseErreiResposta(){}
function acerteiResposta(){}
//-----------------------------------------------------------styles--------------------------------------------------------------------//
const EstiloPergunta = styled.div`
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
const EstiloP = styled.p `
    font-weight: ${props => props.habilitado ? "400" : "700"};
    font-size: ${props => props.habilitado ? "18px" : "16px"};
    line-height: ${props => props.habilitado ? "22px" : "19px"};
    color: #333333;
    font-family: 'Recursive', sans-serif;
    margin-left: 15px;
    margin-top: ${props => props.habilitado && "100px"};
    width: 100%;
`
const Botao = styled.button`
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
const BotaoQuase = styled.button`
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
const BotaoZap = styled.button`
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
const DivTexto = styled.div`
    width: 100%;
    height: 50%;
    margin-top: 18px;

    display: flex;
`
const DivImagem = styled.div`
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