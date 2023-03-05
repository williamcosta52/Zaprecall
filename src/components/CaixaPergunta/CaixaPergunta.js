import styled from "styled-components";
import setaPlay from "../../assets/seta_play.png";
import perguntas from "../../perguntas";
import setaVirar from "../../assets/seta_virar.png";
import iconeCerto from "../../assets/icone_certo.png"
import iconeErro from "../../assets/icone_erro.png"
import iconeQuase from "../../assets/icone_quase.png"
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function CaixaPergunta({ pergunta, novaArrPerguntas, setContador, contador }){

    const [icone, setIcone] = useState(setaPlay);
    const [textoPergunta, setTextoPergunta] = useState(pergunta);
    const [virarCarta, setVirarCarta] = useState(false);
    const [cardClicado, setCardClicado] = useState(null);
    const [revelarResposta, setRevelarResposta] = useState(false);
    const [respostaRiscada, setRespostaRiscada] = useState(false);
    const [acertei, setAcertei] = useState(false);
    const [errei, setErrei] = useState(false);
    const [quaseErrei, setQuaseErrei] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [dataTeste, setDataTeste] = useState("play-btn")
    const novoObjPerguntas = {...perguntas};

    return (
        <EstiloPergunta 
        data-test="flashcard"
        habilitado={virarCarta} 
        revelarResposta={revelarResposta} 
        acertei={acertei}
        errei={errei}
        quaseErrei={quaseErrei}
        respostaRiscada={respostaRiscada}
        >
            <DivTexto>
                <EstiloP data-test="flashcard-text">{textoPergunta}</EstiloP>
            </DivTexto>
            <DivImagem>
                <img alt="seta-play" data-test={dataTeste} src={icone} onClick={isDisabled ? null : MostrarPergunta} />
                {errei !== "" || errei === true ? errei : ""}
                {quaseErrei !== "" || quaseErrei === true ? quaseErrei : ""}
                {acertei !== "" || acertei === true ? acertei : ""}
            </DivImagem>
        </EstiloPergunta>
    )
    function MostrarPergunta(){

            setVirarCarta(true);
            setDataTeste("turn-btn");
            setIcone(setaVirar);
            setCardClicado(pergunta);

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
                    setErrei(<Botao data-test="no-btn" onClick={resultadoErrado}><span>Não lembrei</span></Botao>)
                    setQuaseErrei(<BotaoQuase data-test="partial-btn" onClick={resultadoQuase}><span>Quase não lembrei</span></BotaoQuase>)
                    setAcertei(<BotaoZap data-test="zap-btn" onClick={resultadoCerto}><span>Zap!</span></BotaoZap>)
                }
            }
        }
    }
    function resultadoCerto(){

        setAcertei("");
        setTextoPergunta(pergunta);
        setVirarCarta(false);
        setRevelarResposta(false);
        setErrei(false);
        setQuaseErrei(false);
        setRespostaRiscada(true);
        setIcone(iconeCerto);
        setContador(contador + 1);
        setIsDisabled(true);
        setDataTeste("zap-icon")
}
    function resultadoErrado(){

        setErrei("");
        setTextoPergunta(pergunta);
        setVirarCarta(false);
        setRevelarResposta(false);
        setQuaseErrei(false);
        setRespostaRiscada(true);
        setAcertei(false);
        setIcone(iconeErro);
        setContador(contador + 1);
        setIsDisabled(true);
        setDataTeste("no-icon");
    }
    function resultadoQuase(){

        setQuaseErrei("");
        setTextoPergunta(pergunta);
        setVirarCarta(false);
        setRevelarResposta(false);
        setErrei(false);
        setRespostaRiscada(true);
        setAcertei(false);
        setIcone(iconeQuase);
        setContador(contador + 1);
        setIsDisabled(true);
        setDataTeste("partial-icon");
    }
}
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
    text-decoration: ${props => props.respostaRiscada ? "line-through" : ""};
    text-decoration-color: ${props => props.acertei && "green"} ${props => props.errei && "red"} ${props => props.quaseErrei && "yellow"};
    color: ${props => props.acertei === "" ? "green" : props.errei === "" ? "red" : props.quaseErrei === "" ? "yellow" : "black"};
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