import logo from "../src/assets/logo.png";
import CaixaPergunta from "./components/CaixaPergunta";


export default function App() {

  const numeroPerguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];


  return (
    <div>
      <div className="container">
        <div className="cabecalho">
          <img alt="logo" src={logo} />
          <h1>ZapRecall</h1>
        </div>
          {numeroPerguntas.map((pergunta, index) => {
            return (
            <CaixaPergunta 
              key={index}
              pergunta={pergunta}
              numeroPerguntas={numeroPerguntas}
            />
            )
          })}
        <footer>
          <p>0/4 CONCLUÍDOS</p>
        </footer>
      </div>
    </div>
  );
}