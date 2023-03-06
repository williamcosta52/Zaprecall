import setaPlay from "../../assets/seta_play.png";
import perguntas from "../perguntas";
import setaVirar from "../../assets/seta_virar.png";
import iconeCerto from "../../assets/icone_certo.png"
import iconeErro from "../../assets/icone_erro.png"
import iconeQuase from "../../assets/icone_quase.png"
import { useState } from "react";
import { EstiloPergunta } from "./CaixaPergunta/caixaPergunta";
import { EstiloP } from "./CaixaPergunta/caixaPergunta";
import { Botao } from "./CaixaPergunta/caixaPergunta";
import { BotaoQuase } from "./CaixaPergunta/caixaPergunta";
import { BotaoZap } from "./CaixaPergunta/caixaPergunta";
import { DivTexto } from "./CaixaPergunta/caixaPergunta";
import { DivImagem } from "./CaixaPergunta/caixaPergunta";


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