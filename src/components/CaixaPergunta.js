import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import perguntas from "../perguntas";

export default function CaixaPergunta({ pergunta }){

    return (
        <div className="caixinha-pergunta"> //usar estado aqui para trocar a caixa 
            <p>{pergunta}</p> //criar estado para trocar a "pergunta" para a pergunta da carta virada 
            <img alt="seta-play" src={setaPlay} onClick={mostrarPergunta} /> //criar um estado pra trocar a imagem
        </div> 
    )

        function mostrarPergunta(){ /*quando chamar a função, trocar os estados*/

            return (
                <div className="pergunta-virada">
                    <p>{perguntas.question}</p>
                    <img src={setaVirar} />
                </div>
            )
        }
}
