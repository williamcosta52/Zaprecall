import logo from "../src/assets/logo.png";
import setaPlay from "../src/assets/seta_play.png";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="cabecalho">
          <img alt="logo" src={logo} />
          <h1>ZapRecall</h1>
        </div>
        <div className="caixinha-pergunta">
          <p>Pergunta 1</p>
          <img alt="seta-play" src={setaPlay} />
        </div>
        <footer>
          <p>0/4 CONCLUÍDOS</p>
        </footer>
      </div>
    </div>
  );
}